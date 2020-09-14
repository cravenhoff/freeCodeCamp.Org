/* COMPARISON OPERATORS */

/*

  Comparison operators, are a set of operators that take a value set (two operands) and compare the value on the left with the one on the left.
  Comparison operators return boolean values of either true or false, based on the conditions being compared.
  
  Comparison operators produce what is called "conditional logic" when used in combination with conditional statements, which is their usual application.

*/

/* 

  Equality, Strict Equality, Inequality and Strict Inequality:
  
  => Equality Operator
  Checks if one value is equal to another value.
  The equality operator in JavaScript is two equal signs/symbols: ==
  Eg: 5 == 5 (Returns TRUE) and 2 == 1 (Returns FALSE).
  
  => Strict Equality Operator
  Checks to see if one value is equal to another AND has the same data type.
  The strict equality operator in JavaScript uses three equal signs/symbols: ===
  Eg: 9 === 9 (Returns TRUE as 9 is equal to 9, and both values are number types) and 9 === "9" (Returns FALSE as 9 is equal to "9", but both have different data types).
  
  => Inequality Operator
  Checks to see if one value is not equal to another.
  The inequality operator in JavaScript uses the exclamation mark and the equal symbol: !=
  Eg: 3 != 4 (Returns TRUE) and 3 != 3 (Returns FALSE because 3 is equal to 3).
  
  => Strict Inequality Operator
  Similar to the Strict Equality Operator, except that it checks to see if one value is NOT EQUAL to another AND has a different data type.
  The strict inequality operator uses the same symbol as the inequality operator, but has an additional equal sign added to it: !==
  Eg: 7 !== "7" (Returns TRUE) and 7 !== 7 (Returns FALSE as 7 is equal to 7 and both share the same data type).
  
  
*/

// Equality Operator
if (5 == 55) {
  let a = "Yeah! We're EQUAL.";
  console.log(a);
} else {
  let a = "Too bad! We're NOT EQUAL.";
  console.log(a);
}

// Strict Equality Operator
if (5 === "5") {
  let a = "Yeah! We are STRICTLY EQUAL.";
  console.log(a);
} else {
  let a = "Too bad! We're NOT STRICTLY EQUAL.";
  console.log(a);
}

// Inequality Operator
if (7 != 5) {
  let a = "Oops! We're INEQUAL.";
  console.log(a);
} else {
  let a = "Yeah! We're EQUAL.";
  console.log(a);
}

// Strict Inequality Operator
if (5 !== "5") {
  let a = "Oops! We're STRICTLY NOT EQUAL.";
  console.log(a);
} else {
  let a = "Yeah! We're STRICTLY EQUAL.";
  console.log(a);
}


/* 

  Less Than, Less Than or Equal To, Greater Than, Greater Than or Equal To:
  
  => Less Than Operator
  Checks if one value is less than another value.
  The less than operator in JavaScript uses the less than sign: <
  Eg: 2 < 10 (Returns TRUE) and 2 < 1 (Returns FALSE).
  
  => Less Than or Equal To Operator
  Checks to see if one value is less than or equal to another value.
  The less than or equal to operator uses the less than or equal to mathematical symbol: <=
  Eg: 4 <= 5 (Returns TRUE as 4 is less than 5) and 10 <= 5 (Returns FALSE as 10 is not less than or equal to 5).
  
  => Greater Than Operator
  Checks to see if a value is great than another.
  Uses the greater than mathematical symbol: >
  Eg: 5 > 3 (Returns TRUE) and 5 > 10 (Returns FALSE).
  
  => Greater Than or Equal To Operator
  Checks if one value is greater than or equal to another.
  Uses the greater than or equal to mathematical symbol: >=
  Eg: 10 >= 12 (Returns TRUE) and 10 >= 5 (Returns FALSE).
  
*/

// Less Than Operator
if ( 7 < 12) {
  let answer = "7 is less than 12.";
  console.log(answer);  
} else {
  let answer = "7 is greater than 12.";
  console.log(answer);  
}

// Less Than or Equal To Operator
if (2 <= 10) {
  let answer = "2 is less than or equal to 10.";
  console.log(answer);  
} else {
  let answer = "2 is greater than or equal to 10."
  console.log(answer);  
}

// Greater Than Operator
if (15 > 12) {
  let answer = "15 is greater than 12.";
  console.log(answer);  
} else {
  let answer = "15 is less than 12.";
  console.log(answer);  
}

// Greater Than or Equal To Operator
if (20 >= 15) {
  let answer = "20 is greater than or equal to 15."; 
  console.log(answer);   
} else {
  let answer = "20 is less than or equal to 15.";
  console.log(answer);  
}

/* 

  Logical AND and OR Operators:
  
  => Logical AND Operator
  Compares two values and returns TRUE if and only if both values are true.
  AND Operator in JS uses the double ampersand symbol: &&
  Eg: 10 === 10 && 10 >= 5 (Returns TRUE) and 10 === "10" && 10 >= 5.
  
  => Logical OR Operator
  Returns TRUE if any of its values are true, otherwise it returns false.
  OR Operator in JS uses two pipe symbols: ||
  Eg: 5 >= 2 || 5 === "5" (Returns TRUE because the first comparison is true, despite the second comparison returning false)
      and 10 >= 5 || 10 === "10" (Return FALSE because BOTH values are false) and 5 >= 10 || 5 === 5 (Returns TRUE).
  
*/

// Logical AND Operator
let input = 5;
if (input > 0 && input < 20) {
  console.log("Input is between 1 and 20.");
} else {
  console.log("Please enter a value between 1 and 20.");
}

// Logical OR Operator
let input = "1998"; 
if (input > 2000 || typeof(input) === "number") {
  console.log("Welcome to the 21st Century!");  
} else {
  console.log("You are not welcome in the 21st Century!");
}
