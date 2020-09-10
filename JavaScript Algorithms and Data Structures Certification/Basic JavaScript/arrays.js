/* STORING MULTIPLE VALUES IN JAVASCRIPT USING ARRAYS */

/* 
  Arrays:
 
  Unlike variables, arrays can store and hold multiple values. 
  The values of arrays can be stored in very basic and simple layers, or can be extended into more complex layers or dimensions.
  This creates what are called "multi-dimensional arrays" that are essentially nested within one another.
  
*/

// Basic: One-Dimensional Arrays
let shoppingList = ["Apples", "Egg", "Bananas", "Pure Water", "Oranges"];

// Complex: Multi-Dimensions (Nested) Arrays
let myShoppingList = [
  ["Apples", 6],
  ["Egg", 1],
  ["Bananas", 2],
  ["Pure Water", 4],
  ["Oranges", 3]
];

/* 
  Accessing Array Data Using Bracket Notation:
  
  Elements of arrays can be access in a similar fashion to string characters/literals, using bracket notation.
  Arrays also use zero-based indexing. Hence, the first element of an array has the index 0 and not 1. 
*/

// Access one-dimensional array elements/values
let fruits = ["Apples", "Oranges", "Pairs", "Grapes", "Bananas"];
let firstFruit = fruits[0];

// Access the nth-element of an array
let firstFruit = fruits[2];

// Access the last element of an array
let lastFruit = fruits[fruits.length - 1];

// Access the nth-to-last element of an array
let randomFruit = fruits[fruits.length - 3]; // Retrieves and stores the third last element of the array.
