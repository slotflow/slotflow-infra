import { Kafka } from 'kafkajs';
import { log } from './logger/logger';
import { kafkaConfig } from './config/env';

const kafka = new Kafka({
    clientId: kafkaConfig.clientId,
    brokers: kafkaConfig.brokers
});

const admin = kafka.admin();

const start = async () => {
    try {
        await admin.connect();
        log.info("Kafka Admin Connected");

        const existingTopics = await admin.listTopics();
        const topicsToCreate = Object.values(kafkaConfig.topics)
            .filter(topic => !existingTopics.includes(topic))
            .map((topic) => ({
                topic,
                numPartitions: 1,
                replicationFactor: 1
            }));

        if (topicsToCreate.length > 0) {
            await admin.createTopics({
                waitForLeaders: true,
                topics: topicsToCreate,
            });
            log.info(`Kafka Admin: Created ${topicsToCreate.length} new topics`);
        } else {
            log.info("Kafka Admin: All topics already exist");
        }

        await admin.describeCluster()

        await admin.disconnect();
        log.info("Kafka Admin Disconnected");
    } catch (error) {
        log.error("Failed to start kafka service: ", error as Error);
    }
};

start();