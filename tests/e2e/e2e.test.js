const axios = require("axios");

describe("Tests E2E de l'API", () => {
  const baseURL = "http://localhost:3000";

  describe("GET /hello/:name", () => {
    it("répond avec un message personnalisé", async () => {
      const res = await axios.get(`${baseURL}/hello/David`);
      expect(res.status).toBe(200);
      expect(res.data).toBe("Hello world! From David");
    });
  });

  describe("POST /hello", () => {
    it("répond avec un message basé sur l'en-tête", async () => {
      const res = await axios.post(
        `${baseURL}/hello`,
        {},
        { headers: { "x-name": "Eve" } }
      );
      expect(res.status).toBe(200);
      expect(res.data).toBe("Hello world! From Eve");
    });
  });
});
