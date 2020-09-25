/* LOOPS IN JAVASCRIPT */

/*

  => While Loops
  While loops run or execute only "while" the condition is TRUE. The loop is skipped (not executed) when the condition is FALSE.
  While loops, and loops in general, are essentially IF Statements (Conditional Statements), but instead of using multiple lines of conditional statements, loops help clean-up code and achieve the same thing with just one comman/construct with a few lines of code.
  
  => For Loops
  For loops are similar to while loops, but vary slightly in their syntax and execution.
  With while loops, the counter or index variable is declared outside the while loop, before it is executed. The increment or decrement value is included within the loop, and is executed at the end of it.
  For loops on the other hand, include the variable declaration of the counter, the condition, and the increment/decrement (final expression) all together within the parenthesis symbol. However, it is important to take note of the order of execution of these three constructs.
  
  1. Variable declaration: 
  This is executed first and only once during the life of the for loop. Furthermore, the variable declaration is executed before the loop runs.
  
  2. Condition: 
  The condition is executed before the loop runs, and will continue to run until the condition is false or no longer true.
  
  3. Final Statement/Expression (Increment/Decrement):
  The final expression is executed at the end of the loop, prior to the condition running.
  
  => Nesting For Loops
  For loops can be nested within each other. This is generally helpful and is used when dealing with multi-dimensional arrays.
  The nested for loops are used to loop through the parent array and its sub-array elements.
  
  => Do... While Loops
  Do while loops are similar to while loops, however they vary in their execution and syntax.
  Do while loops ensure that code within the curly braces is executed once before the condition is checked. Conversely, while loops do not execute code within the curly braces until after the condition is executed and returns true.

*/

// Create a while loop to print out the numbers 1 through to 5
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

// Create a for loop to print out the numbers from 100 to 1, backwards
for (let i = 100; i > 0; i--) {
  console.log(i);
}

// Iterate odd numbers with a for loop
for (let i = 1; i < 10; i += 2) {
   console.log(i);
}

// Iterate even numbers with a for loop
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// Iterate through an array with a for loop
let data = [1, 2, 3];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// Iterate through a nested array using a for a loop and output each sub-array element
let arr = [
  [3, 6],
  [9, 12],
  [15, 18],
];
let arrLength = arr.length;

for (let i = 0; i < arrLength; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// Create a do... while loop to ensure the number 5 is added to an empty array before the while condition is executed
let newArr = [];
let idx = 5;

do {
  newArr.push(idx);
  idx++;
} while (idx < 5);
