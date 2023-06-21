const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.json({ value: "Hello World!" });
});

app.listen(3000);
