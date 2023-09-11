import type { FastifyPluginAsync } from "fastify";

const licenses: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get("/", async function (request, reply) {
        return "licenses GET";
    });

    fastify.post("/", async function (request, reply) {
        return "licenses POST";
    });

    fastify.delete("/:id", async function (request, reply) {
        return "Single license";
    });
    // maybe we need to switch to PATCH
    fastify.put("/:id", async function (request, reply) {
        return "Update  license";
    });
};

export default licenses;
