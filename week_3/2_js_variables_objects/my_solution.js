// I paired [by myself, with:] on this challenge.




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

