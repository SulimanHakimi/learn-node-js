const express = require("express");
const app = express();

app.set("view engine", "ejs");
let isLoign = true ;
app.listen(3000);
if (isLoign) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/about", (req, res) => {
    res.render("about");
  });
  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.get("/register", (req, res) => {
    res.render("register");
  });

  app.use((req, res) => {
    res.render("404");
  });
} else {
  app.get("/register", (req, res) => {
    res.render("register");
  });
  app.use((req, res) => {
    res.render("login");
  });
}
