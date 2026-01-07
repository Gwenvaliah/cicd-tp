const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("Retourne le message de base sans nom", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("Retourne un message personnalisé avec un nom valide", () => {
    expect(getGreeting("Alice")).toBe("Hello world! From Alice");
  });

  it("Gère les chaînes vides", () => {
    expect(getGreeting("")).toBe("Hello world!");
  });

  it("Gère null comme pas de nom", () => {
    expect(getGreeting(null)).toBe("Hello world!");
  });

  it("Gère undefined comme pas de nom", () => {
    expect(getGreeting(undefined)).toBe("Hello world!");
  });
});
