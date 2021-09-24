const fs = require("fs");

/* //--read data from a file  in file System way --//
fs.readFile("bigdata.txt", (err, data) => {
  console.log(data.toString());
}); */

// --read data from a file in readStream way --//
/* //1.create a readStram
const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
//2.read data
ourReadStream.on("data", (chunk) => {
  //   console.log(chunk);
  console.log(chunk.toString());
});  */

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf-8");
ourReadStream.on("data", (data) => {
  console.log(data);
});


