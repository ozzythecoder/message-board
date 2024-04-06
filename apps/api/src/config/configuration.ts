export default () => ({
    port: parseInt(process.env.PORT as string, 10) ?? 3000,
    jwtSecret: process.env.JWT_SECRET,
    database: {
        url: process.env.DATABASE_URL,
    },
});
