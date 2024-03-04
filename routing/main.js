const http = require("http");
const fs = require("fs");
let isLogin = true;
const server = http.createServer((req, res) => {
  path = "./";
  if (isLogin) {
    if (req.url === "/") {
      res.statusCode = 200;
      path += "index.html";
    } else if (req.url === "/about") {
      res.statusCode = 200;
      path += "about.html";
    } else if (req.url === "/login") {
      res.statusCode = 200;
      path += "login.html";
    } else if (req.url === "/profile") {
      res.statusCode = 301;
      res.setHeader("location", "/index.html");
      res.end();
    } else {
      res.statusCode = 404;
      path += "404.html";
    }
  } else {
    path += "login.html";
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
