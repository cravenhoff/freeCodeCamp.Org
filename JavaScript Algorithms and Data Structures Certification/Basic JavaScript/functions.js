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
