export default ({ env }) => ({
    auth: {
        secret: env("ADMIN_JWT_SECRET"),
        sessions: {
            accessTokenLifespan: 1800, // 30 minutes
            maxRefreshTokenLifespan: env.int(
                "ADMIN_MAX_REFRESH_TOKEN_LIFESPAN",
                2592000
            ), // 30 days
            idleRefreshTokenLifespan: env.int(
                "ADMIN_IDLE_REFRESH_TOKEN_LIFESPAN",
                604800
            ), // 7 days
            maxSessionLifespan: env.int("ADMIN_MAX_SESSION_LIFESPAN", 2592000), // 30 days
            idleSessionLifespan: env.int("ADMIN_IDLE_SESSION_LIFESPAN", 3600), // 1 hour
        },
    },
    apiToken: {
        salt: env("API_TOKEN_SALT"),
    },
    transfer: {
        token: {
            salt: env("TRANSFER_TOKEN_SALT"),
        },
    },
    flags: {
        nps: env.bool("FLAG_NPS", true),
        promoteEE: env.bool("FLAG_PROMOTE_EE", true),
    },
});
