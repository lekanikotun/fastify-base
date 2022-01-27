import { RouteHandler } from "fastify";

export const health: RouteHandler = (request, reply) => {
  reply.status(200).send({
    status: "ok",
  });
};
