import { expect } from "chai";
import fastify from "fastify";

import { sample } from "./";

describe("Sample Plugin", () => {
  const app = fastify();
  app.register(sample);

  it("should test plugin", () => {
    app.inject(
      {
        method: "POST",
        url: "/sample",
        payload: {
          msg1: "Hello",
          msg2: "World!",
        },
      },
      (err, response) => {
        expect(response.body).to.equal("Hello World!");
      }
    );
  });
});
