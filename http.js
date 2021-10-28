const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is out short whatever");
  }
  res.end(`
  <h1>Ooops!</h1>
  <p>We can't find the page you are looking for</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000, () => {
  console.log("Listening");
});
