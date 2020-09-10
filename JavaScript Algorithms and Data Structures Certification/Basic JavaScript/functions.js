/* FUNCTIONS IN JAVASCRIPT */

/*

  Functions in JavaScript help to create reusable code.
  Function syntax: function functionName() {};
  
*/

// Function declaration
function greetings() {
  console.log("Hello there! Welcome.");
}

// Calling or invoking a function
greetings(); // Outputs the string "Hello there! Welome." onto the console.

/* 

  Passing values into functions:
  
  Functions can receive values called "arguments". These are usually stored in what are called "parameters".
  These parameters act as containers, essentially variables, for values to be stored in and used within functions.
  
  Parameters allow more dynamic values to be inserted into functions for function-specific operations, making your code more dynamic.

*/

// Function declaration with parameters
function greetings(name) {
  console.log(`Hello ${name}! Welcome aboard.`);
}

// Invoking a function and passing arguments to it
greetings("Chris");

/* 

  Return Statement:
  
  The "return" statement outputs a value from a function.
  This ensures that any results/values can be accessed from within a function and used for other purposes outside of the originating function.
  
  Attempting to access the results of an in-function operation without the return statement, will return a value of "undefined".

*/

// Return the value of the addition function
function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

add(5, 7); // Invokes the add() function, inputs the values/arguments 5 and 7, adds the two numbers, and returns the sum => 12.
// Storing or assigning the return value of a function
let results = add(3, 6); // The sum of 3 and 6 can now be accessed using the "results" variable.

// Returning undefined without the "return" statement
function divide(num1, num2) {
  let division = num1 / num2;  
}

// Trying to access the results of the division operation will return an "undefined" value.
divide(10, 2); // divide() function returns "undefined".

let results = divide(10, 2); // Assigns the return value of "undefined" to the "results" variable.
