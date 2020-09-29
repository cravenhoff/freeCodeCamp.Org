/*
  FREECODECAMP EXERCISE:
  1. Write a program that reverses a string using recursion. Given the string "freeCodeCamp" your program should return "pmaCedoCeerf".
*/

let counter = 0;
let reversedChar = [];
let reversedStr = "";
let finalStr = "";

let reverseString = str => {
	let stringLength = str.length;

	// Define base camp
	if (stringLength === 0) {
		return "You've run out of characters!";
	}
    	
	// Saves the last character of the string
	let strChar = str[stringLength - 1]

	let newStr = "";
	newStr += str.slice(counter, stringLength - 1); // Returns a new string minus the last character
	
	// Push the last string character into a new array
	reversedChar.push(strChar);
	
	// Conver the array into a string
	reversedStr = reversedChar.toString();
	
	// Removes (replaces) the commas in the string returned from the toString() Method
	finalStr = reversedStr.replace(/,/g, "");

	console.log(finalStr);
    	return reverseString(newStr);
}

console.log(reverseString("freeCodeCamp")); // Prints out the string in reverse "pmaCedoCeerf"
console.log(reverseString("SwitchMaven")); // Prints out the string in reverse "nevaMhctiwS"
