import { expect } from "chai";
import fastify from "fastify";
import { health } from "./";

describe("Route Handler", async () => {
  const app = fastify();
  app.get("/health", health);

  it("should execute route handler", () => {
    app
      .inject()
      .get("/health")
      .end((err, response) => {
        expect(JSON.parse(response.payload)).to.eql({ status: "ok" });
        app.close();
      });
  });
});
