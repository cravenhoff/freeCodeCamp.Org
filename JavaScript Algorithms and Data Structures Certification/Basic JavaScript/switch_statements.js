/* SWITCH STATEMENTS */

/*

  Switch Statements:
  
  Switch statements provide a more concise form of conditional flow or logic in a program compared to if else and if else if statements.
  Switch statements are commonly used in situations that require multiple conditions to be tested.
  Important to note that switch statments use strict equality when checking a condition against a value.
  
  Switch statements provide two structures: switch declaration with value to compare against, and cases (or case statements) - basically conditions to check.
  Each case in a switch statement can do things like create or assign an existing variable to a value, or perform some arithmetic operation.
  Switch statements are exited using the BREAK Statement / Keyword at the end of a case declaration. Without the BREAK Statement, JS continues on to run any subsequent case statements until it reachs the next immediate BREAK Statement.
  
  Similar to if else statements that provide a default option when no particular condition is being met, switch statements use the DEFAULT Statement to set the default condition to execute when all others fail.

*/

// Switch Statement
let team = "";
function checkRank(rank) {
  switch (rank) {
    case 0:
      team = "Alpha";
      break;
      
    case 1:
      team = "Delta";
      break;
      
    case 2:
      team = "Charlie";
      break;
      
    case 3:
      team = "Bravo";
      break;
  }
  
  return team;
}

checkRank(3); // Outputs "Bravo".

// Switch Statement with Default Value / Option
let level = "";
function checkLevel(val) {
  switch(val) {
    case 1:
      level = "You are at Level 1.";
      break;
      
    case 2:
      level = "You are at Level 2.";
      break;
      
    case 3:
      level = "You are on the third level.";
      break;
      
    default:
      level = "Level does not exist.";
      break;
  }
  
  return level;
}
