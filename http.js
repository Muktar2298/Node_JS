const http = require("http");

/* //--crate a server --//
const server = http.createServer();

// --set a port for the server --//
server.listen(3000);
console.log("listening from port 3000"); */

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("Hello Programmers!");
      res.write("How are you doing ?");
      res.end();
    } else if (req.url === "/about") {
      res.write("This is About Page");
      res.end();
    } else {
      res.write("Not Found!");
      res.end();
    }
  })
  .listen(3000);

console.log("Listengin from port 3000");
