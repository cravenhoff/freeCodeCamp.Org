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

   Retrieving Objects Values / Properties Using Dot Notation:
   
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

/*

   Retrieving Objects Values / Properties Using Bracket Notation:
   
   => Retriving Properties Using Bracket Notation
   Bracket notation is the second method used to retrieve object properties and their values.
   This method is generally used in instances where property names contain more than one word.
   Properties are retrieved in a similar fashion to dot notation, but instead of appending the property name after the dot, square brackets are used with the property name encompassed in quoted strings (using either single or double quotes).
   Eg: The "division" property of the above object example is retrieved as follows: employee["division"];
   
   => IMPORTANT NOTE:
   When using bracket notation, unlike dot notation, always remember to enclose the property name, regardless of whether they are single or multi-worded, within quotes (using either single or double quotes).

*/

// Initialize a restaurant menu order
let menu = {
  "Entree": "Mushroom Soup with French Scone",
  "The Main Dish": "Lamb and Mashed Potatoes",
  "Desert": "Chocolate Muse"
}

// Retrieve the "main dish" property using bracket notation
menu["The Main Dish"]; // Note: Trying to access the three-word properties with dot notation will return a syntax error.

/*

  Storing Property Values in Variables:
  
  => Properties can be retrieved from objects and stored in variables the same way we can initialize a variable or assign an array's value to a new variable.
  Eg: let entree = menu["Entree"]; // Variable "entree" now contains the value of the "Entree Property" => "Mushroom Soup with French Scone".
  
  => JavaScript treats property names as case-sensitive, so trying to retrieve a property name without the proper case will return a value of "undefined". Hence, it's important to pay attention to the case of property names when working with objects.
  Eg: let desert = menu["desert"]; // "desert" variable is now equal to "undefined".

*/

// Retrieve the "main dish" property and assign it to a new variable
let mainDish = menu["The Main Dish"]; // mainDish variable now contains the value of the property "The Main Dish" => "Lamb and Mashed Potatoes".
let mainCourse = menu["the main dish"]; // The menu object returns a value of "undefined" as property name has the incorrect case. Hence, mainCourse variable is equal to "undefined".


/*

  MANIPULATING OBJECTS:
  
  => Updating Object Properties:
  Object properties can be updated in a similar fashion to how array values are updated.
  Simply call the property name using either dot or bracket notation in the same format/syntax property values are retrieved and using the assignment operator, assign a new value to it, exactly as how you would initialize or update a variable.
  Eg: Using the menu object, we can update the Desert Property with the following value: menu.Desert = "Cheese Cake".
  // The Desert Property of the Menu Object is now equal to the updated value "Cheese Cake".
  
  => Add New Object Properties:
  New properties can be added dynamically to existing objects using both dot and bracket notations.
  The same format / syntax used in retrieving and updating properties is used as well for adding new object properties.
  Eg: Add a "surprise" property meal to the Menu Object Example above.
  menu["Surprise Meal"] = "Spicy Indian Chicken Side Dish".
  // The Menu Object now has a total of 4 properties: Entree, The Main Dish, Desert, and Surprise Meal.
  
  => Delete Object Properties:
  Object properties are deleted using the "delete" keyword. The keyword is placed before the property name, which is retrieved using either dot or bracket notation.
  Eg: To delete the above Menu Object, do as follows: delete menu.Entree;
  // The Entree Property no longer exists in the Menu Object.
  
  => IMPORTANT NOTE: Deleting Properties and Variables
  Properties that are deleted cannot have their values assigned to and stored in variables.
  JavaScript returns a boolean value when deleting properties. Hence, if a property is successfully deleted, the boolean value of TRUE is returned.
  

*/

let book = {
  "title": "Deep Work",
  "author": "Cal Newport",
  "datePublished": 2016,
  "totalPages": 257
}

// Retrieve current total pages
let currentPages = book["totalPages"]; // currentPages = 257.

// update / correct the totalPages property to 296 pages
let actualPages = book.totalPages = 296; // totalPages property = 296 && actualPages = 296 as well.

// Add Publisher Property to the Book Object
book["publisher"] = "Piatkus"; // Book Object now contains 5 properties, including Publisher.

// You can even assign a new property addition to a variable
let countryFirstPublished = book["firstPublished"] = "The United States of America"; // Book Object now contains 6 properties with the addition of the firstPublished Property, which the variable countryFirstPublished is equal to.

// Delete the totalPages Property of the Book Object
delete book.totalPages; // Book Object now contains 5 properties, with the totalPages property now deleted.


/*
  
  =>Testing Objects for Properties
  Objects can be tested to check if they contain certain properties. This is done using the hasOwnProperty() method othe object construct in JavaScript.
  Syntax: objectName.hasOwnProperty(propertyName);
  Return value: The hasOwnProperty() method will return a boolean value of true or false.
  

  => Manipulating Complex Objects
  Flexible and complex data structures can be created using objects. Contents of an object can be organized to contain arbitrary values of strings, numbers, boolean values, arrays, functions, and even objects themselves. These can be created as simple or as complex as required through proper nesting.
  
  => Accessing Nested Objects
  Objects can be used to generate complex, flexible data structures. Generally, this is achieved through logically nesting as many layers of objects as required.
  Rule of thhumb: Objects must be a representation of real-life objects, and the data structure / layers should follow a logical sequence and flow.
  
  
  => Accessing Nested Arrays
  Nested arrays can be accesse in a similar fashion to nested objects. However, instead of using associative keys, we replace these with index values. Furthermore, array elements can only be accessed using bracket notation, and not dot notation.

*/

// Test the object if it contains certain properties
let vegetables = {
  Greens: "Abika",
  Beans: "Green Beans",
  TropicalFruit: "Pineapple"
}

vegetables.hasOwnProperty("Greens"); // Returns TRUE as vegetables{} object contains the property "Greens".
vegetables.hasOwnProperty("Carrots"); // Returns FALSE as property does not exist in the vegetables{} object.

// hasOwnProperty() with functions
let checkObj = function(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
       return obj[checkProp];
  } else {
    return "Not Found";
  }
}

checkObj({Pet: "Kitten", Gender: "Female", Age: 2}, "Pet"); // Function returns "Kitten"
checkObj({
    Pet: "Kitten",
    Gender: "Female",
    Age: 2
  },
  "DOB"); // Function returns "Not Found" as "DOB" Property does not exist in checObj{} object.

// Create a complex, flexible data structure using arrays and a combination of objects and arrays as its properties.
let playlist = [
  {
    Artist: "Michael Jackson",
    Genre: "Pop",
    Album: "Thriller",
    yearPublished: 1982,
    songs: ["Thriller", "Beat It", "Wanna Be Startin' Something"]
  },
  {
    Artist: "Celine Dion",
    Genre: "Pop Ballad",
    Album: "A New Day Has Come",
    yearPublished: 2001,
    songs: ["A New Day Has Come", "Super Love", "The Greatest Reward", "Have You Ever Been In Love"]
  }
];

// Retrieve the first playlist record.
let firstPlaylistRecord = playlist[0];

// Retrieve the artist's name of the first playlist record.
let artistName = firstPlaylistRecord.Artist; // Returns and saves "Michael Jackson" in the variable "artistName".

// Retrieve the album.
let album = firstPlaylistRecord["Album"]; // Returns and saves "Thriller" in the variable "album".

// Retrieve the second song of the Thriller Album.
let firstSong = firstPlaylistRecord.songs[1]; // Returns and saves "Beat It" in the "firstSong" variable.

// Create a complex data structure by nesting layers of objects.
let house = {
  inside: {
    bedrooms: {
      1: {
        room: "Boys Room",
        occupants: 3,
        yearOccupied: 2019,
        bathroom: false,
        lounge: false,
        kitchen: false
      },
      2: {
        room: "Girls Room",
        occupants: 2,
        yearOccupied: 2019,
        bathroom: false,
        lounge: false,
        kitchen: false
      },
      3: {
        room: "Master Bedroom",
        occupants: 2,
        yearOccupied: 2019,
        bathroom: true,
        lounge: true,
        kitchen: true
      }
    },
    sharedFeatures: ["bathroom", "kitchen", "lounge", "dining area"]
  },
  outside: {
    laundryRoom: {
      washingMachine: true,
      dryer: true,
      sink: true
    },
    bbqArea: true,
    carPark: 2
  }
};

// Access entire house{} object
console.log(house);

// Access the inside property of the house{} object
let inside = house.inside;
console.log(inside);

// Access the number 3 room or the Master Bedroom of the house{} object
let masterBedroom = house.inside.bedrooms[3];
console.log(masterBedroom);

// Create a complex array of objects with nested arrays.
let myGarden = [
  {
    type: "vegetables",
    list: ["eggplant", "carrots", "onions", "cabbages", "beans", "potatoes", "ginger"]
  },
  {
    type: "fruits",
    list : ["mango", "watermelon", "peanuts", "pineapple"]
  },
  {
    type: "herbs",
    list: ["rosemary", "parsely", "basil", "oregano", "mint"]
  }
];

// Access the list of garden fruits
let gardenFruits = myGarden[1]; // Retrieves and stores the second element of the myGarden{} object.

// Access the "pineapple" fruit in the garden
let pineapple = myGarden[1].list[3]; // Retrieves and stores the 4th element of the list array, which is the fruit "pineapple".
// You could also do the same thing using the already retrieved second element, or "fruits" objects.
let pineappleFruit = gardenFruits.list[3]; // Retrieves and stores the fruit "pineapple".

// Access the "parsely" herb in the garden
let parselyHerb = myGarden[2].list[1]; // Retrieves and stores the herb "parsely".

/* 
  NOTE: Using dot notation to retrieve a number type property will not work, JavaScript will spit out an error.
  Number type properties can only be access using bracket notation.
*/
