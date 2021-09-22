const path = require("path");

const myPath = "C:/Back-End Web Development/Node JS/Node JS Tutorial/index.js";
const myPathObj = {
  dir: "C:/Back-End Web Development/Node JS/Node JS Tutorial",
  base: "index.js",
};

//--some path methode --//
// 1.basename()
console.log(`BaseName : ${path.basename(myPath)}`);
//2.dirname()
console.log(`DirectoryName : ${path.dirname(myPath)}`);
//3.extname()  --extension name of the filepath --//
console.log(`Extension : ${path.extname(myPath)}`);
//4.parse() -- for knowing the all info of this path --//
console.log(path.parse(myPath));
// 5.format()
console.log(`Fomat of the Path object : ${path.format(myPathObj)}`);

// --some path propertie --//
// console.log(path.delimiter);
