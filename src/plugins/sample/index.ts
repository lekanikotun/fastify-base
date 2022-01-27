import { FastifyPluginCallback } from "fastify";

export const sample: FastifyPluginCallback = (fastify, opts, next) => {
  fastify.post<{
    Body: {
      msg1: string;
      msg2: string;
    };
  }>("/sample", async (request, reply) => {
    const { msg1, msg2 } = request.body;

    reply.status(200).send(`${msg1} ${msg2}`);
  });
  next();
};
