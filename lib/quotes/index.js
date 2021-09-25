/*  1. Comment Section 
Title : Basic Node Application Example
Description : Simple Node Application that print random quotes per seconds interval
Developer : Nishat Hasan Muktar 
Date : 24 / 09 / 21 
 */

//2.Dependences
const fs = require("fs");

//3.Quotes object or Module scaffolding
const quotes = {};

//4.Functions Declaratin (Get all the quotes and return them to the user)
quotes.allQuotes = function allQuotes() {
  // Read the text file contaning the quotes and return
  const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, "utf8");

  // Turn the string into an array of quotes
  const arrayOfQuotes = fileContents.split(/\r?\n/);

  // Return the array
  return arrayOfQuotes;
};

// 5.Export the library
module.exports = quotes;
