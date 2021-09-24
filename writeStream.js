const fs = require("fs");

//--createReadStream --//
const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
//--createWriteStream --//
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

ourReadStream.on("data", (chunk) => {
  ourWriteStream.write(chunk);
});
console.log(ourWriteStream.toString());
