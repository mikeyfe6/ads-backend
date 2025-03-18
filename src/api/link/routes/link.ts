/**
 * link router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::link.link", {
    config: {
        create: {
            policies: ["global::isAuthenticated"],
        },
    },
});
