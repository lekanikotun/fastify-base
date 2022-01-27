import fastify, { FastifyServerOptions } from "fastify";
import { health } from "./routes/health";
import { sample } from "./plugins/sample";

export default (opts: FastifyServerOptions = {}) => {
  const app = fastify(opts);

  app.get("/", (request, reply) => {
    reply.status(200).send({
      message: "Hello World!",
    });
  });
  app.get("/health", health);
  app.register(sample);

  return app;
};
