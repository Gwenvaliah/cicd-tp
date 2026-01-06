const axios = require("axios");
const { app } = require("../../src/server");

describe("Tests E2E de l'API", () => {
  let server;

  beforeAll((done) => {
    server = app.listen(3000, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  describe("GET /hello/:name", () => {
    it("répond avec un message personnalisé", async () => {
      const res = await axios.get("http://localhost:3000/hello/David");
      expect(res.status).toBe(200);
      expect(res.data).toBe("Hello world! From David");
    });
  });

  describe("POST /hello", () => {
    it("répond avec un message basé sur l'en-tête", async () => {
      const res = await axios.post(
        "http://localhost:3000/hello",
        {},
        { headers: { "x-name": "Eve" } }
      );
      expect(res.status).toBe(200);
      expect(res.data).toBe("Hello world! From Eve");
    });
  });
});
