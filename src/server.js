const express = require("express");
const { getGreeting } = require("./greeting");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour méthodes non autorisées
app.use((req, res, next) => {
  if (!['GET', 'POST'].includes(req.method)) {
    res.status(405).send('Method Not Allowed');
  } else {
    next();
  }
});

app.get("/hello/:name?", (req, res) => {
  const name = req.params.name;
  res.send(getGreeting(name));
});

app.post("/hello", (req, res) => {
  const name = req.headers["x-name"];
  res.send(getGreeting(name));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
