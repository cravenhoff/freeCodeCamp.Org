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

*/

// Create a while loop to print out the numbers 1 through to 5.
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}
