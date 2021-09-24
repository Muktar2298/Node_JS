const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write(`<html><head><title>Form</title></head>`);
      res.write(
        `<body><form method="post" action="/process"><input name="message" /></form></body></html>`
      );
      res.end();
    } else if (req.url === "/process" && req.method === "POST") {
      //--for storing user input data into(which is buffer akarea ashbe) body array--//
      const body = [];
      // --Starting the event --//
      req.on("data", (chunk) => {
        body.push(chunk);
      });

      // --When end the event --(concat all the buffer data (which is storing in body array ) in to string format --//
      req.on("end", () => {
        console.log("Stream is finished");
        const userAllInputData = Buffer.concat(body).toString();
        console.log(userAllInputData);
        res.write("Thank Your For Submitted Your Data in Our Server");
        res.end();
      });
    } else {
      res.write("Not Found!");
      res.end();
    }
  })
  .listen(3000);

console.log("Listengin from port 4000");
