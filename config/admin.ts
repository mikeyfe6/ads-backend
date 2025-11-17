export default ({ env }) => ({
    auth: {
        secret: env("ADMIN_JWT_SECRET"),
        sessions: {
            accessTokenLifespan: 30 * 60, // 30 minutes
            maxRefreshTokenLifespan: 30 * 24 * 60 * 60, // 30 days
            idleRefreshTokenLifespan: 14 * 24 * 60 * 60, // 14 days
            maxSessionLifespan: 24 * 60 * 60, // 1 day
            idleSessionLifespan: 2 * 60 * 60, // 2 hours
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
    ai: {
        enabled: true,
    },
});
