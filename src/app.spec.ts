import { expect } from "chai";
import supertest from "supertest";

import app from "./app";

describe("App", () => {
  it("should serve routes", async () => {
    const server = app();
    await server.ready();

    const response = await supertest(server.server).get("/health");

    expect(response.status).to.equal(200);
    expect(response.body).to.eql({ status: "ok" });
  });
});
