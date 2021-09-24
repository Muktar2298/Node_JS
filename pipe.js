const fs = require("fs");

// --create readStream --//
const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// --create writeStream --//
const ourWriteStream = fs.createWriteStream(`${__dirname}/output2.txt`);

// --turn or convert readable stream into wirteable stream using pipe() --//
ourReadStream.pipe(ourWriteStream);
