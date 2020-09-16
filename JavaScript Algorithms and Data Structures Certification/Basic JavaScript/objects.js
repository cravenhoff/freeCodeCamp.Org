/* OBJECTS */

/*

  => Objects:
  Similar to arrays, objects help store multiple values in a variable-like container. However, unlike arrays, objects do not store data in indexes or in an index-value pair format. Rather objects store data in a more structured manner in what are called "properties". These properties are used to access the object values. Object properties are similar to what we would call "array elements".
  
  Objects can be described as a collection of properties and can also be referred to as a type of "associative array", since it deals with string or key-value pairs. Furthermore, objects are directly modelled with real-world objects, and are indivdual entities of their own.
  
  => Object Properties:
  Property names in objects can be stored as either strings or numbers. Non-string values are typecast by JavaScript into strings. Property names can be single-worded or can contain multiple words.
  Depending on which naming method is used, JavaScript has a specific way to call single-word and multi-word properties, with single-word using "dot notation" and multi-word using "bracket notation".
  
  => Creating Objects:
  Objects are created the same way standard variables and arrays are created, using the var or let keyword.
  There are two different ways to create objects based on whether their "declared" or "initialized".
  
  // Declaring Objects
  let dog = new Object();
  
  Ones objects are declared, properties can be assigned to the dynamically using dot notation, like so:
  dog.name = "Bowi";
  dog.color = "Goldie Brown";
  dog.breed = "Golden Retriever";
  
  Now dog{} object contains three properties along with their assigned values: name => Bowi, color => Golden Brown, breed => Golder Retriever.
  
  // Initializing Objects
  let student = {
    name: "James Packard",
    dateOfBirth: "22-09-1992",
    age: 28,
    nationality: "British"
  }
  
  The student{} object was created and "initialized" with four properties: name => James Packard, dateOfBirth => 22-09-1996, age => 28, nationality => British.

*/

// Create Employee Object
let employee = {
  name: "Mark Hanson",
  position: "General Manager",
  division: "Commercial Operations",
  yearAppointed: 2018,
  nationality: "Australian",
  dateOfBirth: "18-04-1975",
  age: 46,
  maritalStatus: "Married",
  numOfChildren: 2
}

/*

   Retrieving Objects Values / Properties Using Dot and Bracket Notation:
   
   => Retriving Properties Using Dot Notation
   Dot notation is one method used to retrieve object properties / values. This method is generally used when the object properties are known.
   Dot notation is recommended in all but situations where property names contain more than one word names.
   Object properties are retrieved through dot notation by firstly calling the object, and appending it with the name of the property to be retrieved.
   Eg: To retrieve the "age" property in the above object example using dot notation: the object name "employee" is called, and appended with the property name ".age", as such: employee.age.
   

*/

// Get Employee Name: Dot Notation
let employeeName = employee.name;
console.log(employeeName);

// Get Employee Position: Dot Notation
let employeePos = employee.position;
console.log(employeePos);

// Get Year Appointed: Dot Notation
let employeeYearAppointed = employee.yearAppointed;
console.log(employeeYearAppointed);
