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

// Access multi-dimensional array elements/values
let users = [
  ["Max Griff", 29, "maxgriff@gmail.com"],
  ["Jamie Fox", 44, "jamiefox@gmail.com"],
  ["Sally Calister", 37, "scalister@yahoo.com"],
  ["Mat Riley", 52, "matriley@gmail.com"]
];

// Get first user
let firstUser = users[0]; // Retrieces and stores first user - another array with three elements.

// Get the first user's name, age, and email and store each of these values in separate variables.
let firstUserName = users[0][0];
let firstUserAge = users[0][1];
let firstUserEmail = users[0][2];


/*

  Modifying Array Data/Elements:
  
  Arrays in JavaScript are "mutable", unlike their string counterparts.
  This means that arrays can easily be manipulated and altered after they are initialized.

*/

// Access the above users array and update the second last users email address
users[2][2] = "sallycalister@gmail.com"; // The third users current email will be updated.


/*

  Manipulating Arrays:
  
  Arrays can be manipulated using the following four (4) array methods:
  1. push() - Adds a new element to the end of an array.
  2. pop() - Removes the last element of an array.
  3. shift() - Removes the first element of an array.
  4. unshift() - Adds a new element to the beginnin of an array.

*/

// Add new elements to an array
let myTodo = ["wash the dishes", "do laundry", "sweep the house", "mop the floor"];
myTodo.push("wash the dog");

// Remove the last element of an array
let latestTodo = myTodo.pop(); // You can also store the removed value/element.

// Removes the first element of an array
let firstTodo = myTodo.shift(); // You can also store the removed value/element.

// Add a new element to the beginning of an arry
myTodo.unshift("study for weekly assessments");
