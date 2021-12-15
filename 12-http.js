// HTTP module allows us to set-up a web-server
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`<h1>Ooops!</h1>
  <p>Can't seem to find the page you're looking for </p>
  <a href='/'>back home</a>`);
});

server.listen(5000);
