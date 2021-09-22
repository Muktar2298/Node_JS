const index = require("./index");
console.log(index.peoples);
console.log(index.sum);
index.test();

const _ = require("lodash");
console.log(_.last(index.peoples));
