import type { FastifyPluginAsync } from "fastify";

const customers: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get("/", async function (request, reply) {
        return [
            { id: 1, name: "customer 1", email: "myname1@gmail.com" },
            { id: 2, name: "customer 2", email: "myname2@gmail.com" },
            { id: 3, name: "customer 3", email: "myname3@gmail.com" },
            { id: 4, name: "customer 4", email: "myname4@gmail.com" },
            { id: 5, name: "customer 5", email: "myname5@gmail.com" },
            { id: 6, name: "customer 6", email: "myname6@gmail.com" },
            { id: 7, name: "customer 7", email: "myname7@gmail.com" },
        ];
    });

    fastify.post("/", async function (request, reply) {
        return "customers POST";
    });

    // maybe we need to switch to PATCH
    fastify.put("/:id", async function (request, reply) {
        return "Update  CUSTOMER";
    });

    // maybe we need to switch to PATCH
    fastify.delete("/:id", async function (request, reply) {
        return "Delete  customer";
    });
};

export default customers;
