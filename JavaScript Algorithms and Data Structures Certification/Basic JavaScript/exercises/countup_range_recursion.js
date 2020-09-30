/* RECURSIVE ALGORITHM THAT COUNTS UP FROM A MIN VALUE AND ENDS AT A GIVEN MAX VALUE */

/*
  
   Recursion Exercise:
   Create a recursive function that takes in two values, a minimum and maximum value (the range), and increments by one from the minimum value, its starting point, until it reaches the maximum value, its ending point.
   
   INSTRUCTIONS:
   1. The algorithm/program should utilize recursions.
   2. The recursive function must be able to accept two arguments:
      a. Minimum value
      b. Maximum value
   3. The recursive function must increment by one (1) after every loop, or function call.
   4. Print out the increments, starting from the minimum value and ending at the maximum value. At the end of the program, both values must be included and printed out.
  
*/

// Create recursive function
let countup = (min, max) => {
  // Define base camp
  if(min > max) {
    return "End of countup";
  } else {
    console.log(min);
    return countup(min + 1, max);
  }
}

// Call the recursive function to run
console.log(countup(0, 10)); // Prints out the numbers 0 through to 10 in increments of one.
