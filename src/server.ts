import 'dotenv/config';

import { log } from './logger/logger';
import { kafkaConfig } from './config/env';
import { kafkaAdmin } from './messaging/kafka.admin';
import { setupGracefulShutdown } from './app/init/shutdown';

const start = async () => {
    try {
        await kafkaAdmin.connect();
        log.info("Kafka Admin Connected");

        const existingTopics = await kafkaAdmin.listTopics();
        const topicsToCreate = Object.values(kafkaConfig.topics)
            .filter(topic => !existingTopics.includes(topic))
            .map((topic) => ({
                topic,
                numPartitions: 1,
                replicationFactor: 1
            }));

        if (topicsToCreate.length > 0) {
            await kafkaAdmin.createTopics({
                waitForLeaders: true,
                topics: topicsToCreate,
            });
            log.info(`Kafka Admin: Created ${topicsToCreate.length} new topics`);
        } else {
            log.info("Kafka Admin: All topics already exist");
        }

        await kafkaAdmin.describeCluster()
        await kafkaAdmin.disconnect();
        log.info("Kafka Admin Disconnected");

        setupGracefulShutdown();
        
    } catch (error) {
        log.error("Failed to start kafka service: ", error as Error);
    }
};

start();