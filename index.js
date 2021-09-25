/*  1. Comment Section 
Title : Basic Node Application Example
Description : Simple Node Application that print random quotes per seconds interval
Developer : Nishat Hasan Muktar 
Date : 24 / 09 / 21 
 */

// 2.Dependences Section
const mathLibrary = require("./lib/math.js");
const quotesLibrary = require("./lib/quotes");

// 3.App Object 0r Module Scaffolding
const app = {};

// 4.Configuration Section
app.config = {
  timeBetweenQuotes: 1000,
};

// 5--Function that prints a random quotes
app.printQuote = function printQuote() {
  // Get all the quotes
  const allQuotes = quotesLibrary.allQuotes();

  // Get the length of the quotes
  const numberOfQuotes = allQuotes.length;

  // Pick a random number between 1 & the number of quotes
  const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

  //Get the quote at that position in the array (minus one)
  const selectedQuote = allQuotes[randomNumber - 1];

  //Pring the quote to the Console
  console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
  // Create the interval, using the config variable defined above
  setInterval(app.printQuote, app.config.timeBetweenQuotes);
};

// 6.Invoke the Loop
app.indefiniteLoop();
