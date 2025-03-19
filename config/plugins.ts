export default ({ env }) => ({
    // ... USERS-PERMISSIONS
    "users-permissions": {
        config: {
            jwt: {
                expiresIn: "7d",
            },
        },
    },
    // ... SENDGRID
    email: {
        config: {
            provider: "sendgrid",
            providerOptions: {
                apiKey: env("SENDGRID_API_KEY"),
            },
            settings: {
                defaultFrom: "afrodiasphere@menefex.nl",
                defaultReplyTo: "afrodiasphere@menefex.nl",
                testAddress: "develop@menefex.nl",
            },
        },
    },
    // ... CLOUDINARY
    upload: {
        config: {
            provider: "cloudinary",
            providerOptions: {
                cloud_name: env("CLOUDINARY_NAME"),
                api_key: env("CLOUDINARY_KEY"),
                api_secret: env("CLOUDINARY_SECRET"),
            },
        },
    },
});
