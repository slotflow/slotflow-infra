export const setupGracefulShutdown = () => {
    const shutdown = async () => {
        process.exit(0);
    }

    process.on("SIGTERM", shutdown);
    process.on("SIGINT", shutdown);
}