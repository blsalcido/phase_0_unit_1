// I paired [by myself] on this challenge.




// Pseudocode

// change value of secretNumber to integer 
// change value of secretNumber to 7
// change password value to 'string'
// change password value to 'just open the door' 
// change allowedIn value to boolean
// change allowedIn value to false boolean
// create new array members
// assign first and fourth elements of members to John and Mary, respectively 

// __________________________________________
// Write your code below.

var secretNumber = 7;

var password = "just open the door";

var allowedIn = 1>2; 

members = ["John","two","three","Mary"];





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

var secretNumber = 7;

var password = "just open the door";

var allowedIn = 1 > 2; //added space between boolean operators for readability 

members = ["John","two","three","Mary"]; // see reflection for question about this line




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// I really like the process of running test code before writing actual code. 
// It gives me a nice starting place for the rest of my code and I like that 
// errors happen in order, keeping the process of writing the code orderly.
// 
// I was a little confused by the members array. It says in the test code that 
// the first element of members should be John and the fourth element of 
// members should be Mary. But, The way I see it as written, isn't John 
// technically in the "zeroth" index of the array? 

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)







//I also did this challenge again with a partner....Here's the work from our session//

// I paired [with: RJ Bernaldo] on this challenge.

// name: Bridgette Salcido
// name: RJ Bernaldo 

// Pseudocode
// #1 declare variable secretNumber and assign an integer to it
// #2 set secretNumber to 7
// #3 declare variable "password" and assign a string to it.
// #4 set "password" to "just open the door"
// #5 declare allowedIn variable and set it to a boolean
// #6 set allowedIn to false
// #7 declare members as an array
// #8 set first item of members equal to John
// #9 set fourth element of members array to Mary

// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = 1 > 2;
var members = [];
members[0] = "John";
members[3] = "Mary";

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

Nothing to refactor here. All naming conventions are correct and 
the code passes all specs. The syntax is correct, spacing is proper, 
and the code is readable. 




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// Bridgette's Reflection
// 
// Pairing a second time on this challenge seemed a little redundant at first but
// it actually cleared up the questions I had about the code I wrote on my own. 
// It turns out that the terms element and index are not interchangeable. Element
// deals with the thing in the array whereas index refers only to the position of
// that thing. See my first reflection for clarification on this. 

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)
