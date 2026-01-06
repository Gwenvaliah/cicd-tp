const request = require("supertest");
const app = require("../../src/server");

describe("API de salutation", () => {
  describe("GET /hello", () => {
    it("Retourne le message de base", async () => {
      const res = await request(app).get("/hello");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world!");
    });
  });

  describe("GET /hello/:name", () => {
    it("Retourne un message personnalisé", async () => {
      const res = await request(app).get("/hello/Bob");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world! From Bob");
    });
  });

  describe("POST /hello", () => {
    it("Utilise l'en-tête x-name pour personnaliser", async () => {
      const res = await request(app)
        .post("/hello")
        .set("x-name", "Charlie");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world! From Charlie");
    });

    it("Retourne le message de base sans en-tête", async () => {
      const res = await request(app).post("/hello");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world!");
    });
  });

  describe("Méthodes non autorisées", () => {
    it("PUT /hello retourne 405", async () => {
      const res = await request(app).put("/hello");
      expect(res.statusCode).toBe(405);
    });

    it("DELETE /hello retourne 405", async () => {
      const res = await request(app).delete("/hello");
      expect(res.statusCode).toBe(405);
    });
  });
});
