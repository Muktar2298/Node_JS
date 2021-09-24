const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // --createReadStream --//
    const ourReadStream = fs.createReadStream(
      `${__dirname}/bigdata.txt`,
      "utf8"
    );
    // ---reaponse clints request without create write stream ---//
    ourReadStream.pipe(res);
  })
  .listen(3000);

console.log("listening from port 3000");
