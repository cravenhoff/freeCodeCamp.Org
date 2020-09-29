/* 

  Create a function that looks up a list of contacts and profiles of individuals, and checks if the provided name exists in the contact and whether or not the particular contact contains the property passed into the function.
  
  INSTRUCTIONS:
  
  1. The function should accept two parameters => contact/profile name, and property.
  
  2. The function should be able to "lookup" a contact list or profile, to find the following:
    a. Name passed into the function - the name will reference the "first name" of the contact,
    b. Property passed into the function - the property linked to the name argument.
    
  3. If the name is found in the contact, the function should proceed to check if the property provided is linked to the name found.
    a. If this is TRUE, the function should return the property value
    b. Else the function should return the string "No such property"
    
  4. If the name is NOT FOUND in the contact, the function should instead return "No such contact".
  
  *NOTE: You'll first have to create a list of contacts which the lookup function will reference.

*/

// Create a contacts array, storing individual profiles as objects.
let contacts = [
  {
    "firstName": "Max",
    "lastName": "Payne",
    "number": 73982201,
    "interests" : [
      "motorcycles",
      "spaceship junk",
      "mechanical engineering"
    ]
  },
  {
    "firstName": "Ada",
    "lastName": "Lovelave",
    "number": 4002321,
    "interests" : [
      "computers",
      "coding and programming",
      "algorithmic development & computation"
    ]
  },
  {
    "firstName": "Nikola",
    "lastName": "Tesla",
    "number": 4992110,
    "interests" : [
      "electrical engineering",
      "thunder",
      "visualization"
    ]
  }    
];

// Create the "lookup" function.
let function = lookup(name, prop) {
  // Loop through the contacts array of objects
  for(let i = 0; i < contacts.length; i++) {
    
  }
}
