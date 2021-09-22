const fs = require("fs");


// --Asynchronous fs methodes --//
//1.readFile()
fs.readFile("myfile.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});


/* // --synchronous fs methods --//
// 1.writeFileSync()
fs.writeFileSync("myfile.txt", "Hello Programmers!");
// 2.appendFileSync()
fs.appendFileSync("myfile.txt", "Welcome to Node.JS Arena.");
//3.readFileSync()
fs.writeFileSync("myfile2.txt", "Exploring Node.JS");
const data = fs.readFileSync("myfile2.txt");
console.log(data.toString()); */
