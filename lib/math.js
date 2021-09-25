/*  1. Comment Section 
Title : Math Library 
Description : Utility library for math-related functions
Developer : Nishat Hasan Muktar 
Date : 24 / 09 / 21 
 */

//2.Math Object or Module Scaffolding
const math = {};

// 3.Functions Declaration(Get a random integer between two integers)
math.getRandomNumber = function getRandomNumber(min, max) {
  let minimum = min;
  let maximum = max;
  minimum = typeof minimum === "number" ? min : 0;
  maximum = typeof maximum === "number" ? max : 0;
  return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};

// 4.Export the library
module.exports = math;
