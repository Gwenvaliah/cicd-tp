const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("retourne le message de base sans nom", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("retourne un message personnalisé avec un nom valide", () => {
    expect(getGreeting("Alice")).toBe("Hello world! From Alice");
  });

  it("gère les chaînes vides", () => {
    expect(getGreeting("")).toBe("Hello world! From ");
  });

  it("gère null comme pas de nom", () => {
    expect(getGreeting(null)).toBe("Hello world!");
  });

  it("gère undefined comme pas de nom", () => {
    expect(getGreeting(undefined)).toBe("Hello world!");
  });
});
