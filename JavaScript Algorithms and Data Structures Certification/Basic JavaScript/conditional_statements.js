/* CONDITIONAL STATEMENTS */

/*

  Conditional Statements are "control flow statements" that determine the flow or logic of a program based on certain conditions.
  JavaScript provides the IF, ELSE AND ELSE IF Conditional Statements.
  
  These conditional statements return boolean values of either true or false, known as "conditional logic".

*/

// IF Statement
let name = "Santa";
if (name === "Santa") {
  console.log("Welcome Santa!");
}

// IF ELSE Statement
// Statements that provide an alternative condition and course of action in a program
let name = "Rain Deers";
if (name === "Elves") {
  console.log("Welcome Santa's Helpers!");
} else {
  console.log("Welcome Rain Deers!");
}

// IF ELSE IF Statement
// Statements with multiple conditions and course of actions
let name = "Santa";
if (name === "Santa") {
  console.log("Welcome Santa!");
} else if (name === "Elves") {
  console.log("Welcome Santa's Helpers!");
} else {
  console.log("Welcome Rain Deers!");
}
