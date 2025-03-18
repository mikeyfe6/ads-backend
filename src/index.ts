import type { Core } from "@strapi/strapi";

export default {
    register() {},

    bootstrap({ strapi }: { strapi: Core.Strapi }) {
        strapi.db.lifecycles.subscribe({
            models: ["plugin::users-permissions.user"],

            async afterCreate(event: any) {
                const { result } = event;

                try {
                    await strapi.service("api::page.page").create({
                        data: {
                            name: result.username,
                            user: result.id,
                        },
                    });
                } catch (error) {
                    strapi.log.error("Error creating page for user:", error);
                }
            },
        });
    },
};
