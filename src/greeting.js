function getGreeting(name) {
  const greeting = "Hello world!";
  if (name !== undefined && name !== null && name !== "") {
    return `${greeting} From ${name}`;
  }
  return greeting;
}

module.exports = { getGreeting };
