/* RECURSIVE ALGORITHM THAT COUNTS DOWN FROM A GIVEN NUMBER */

/*

  Recursion Exercise:
  Create a recursive function that takes in one argument, a number, and counts down from that number until the function reaches zero.

*/

// Create recursive function
let countdown = number => {
  // Define base camp
  if(number === 0) {
    return;
  }
  
  console.log(number);
  return countdown(number - 1);
}

// Call the function to execute
console.log(countdown(5)); // Prints out the numbers from 5 to 0.
