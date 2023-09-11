import type { FastifyPluginAsync } from "fastify";

const auth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post("/login", async function (request, reply) {
        return "LOGIN user";
    });

    fastify.post("/register", async function (request, reply) {
        return "register a user";
    });
};

export default auth;
