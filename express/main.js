const express = require("express");
const app = express();
app.listen(3000);
app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});
app.get("/login", (req, res) => {
  res.sendFile("./login.html", { root: __dirname });
});
app.use((req, res) => {
  res.statusCode = 404;
  res.sendFile("./404.html", { root: __dirname });
});
