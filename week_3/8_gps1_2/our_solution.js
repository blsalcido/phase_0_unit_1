// GPS 1.2 - JavaScript
// Instructor: Emily Anderson

// Students:
// name: Adrian Soghoian
// name: Bridgette Salcido 

//1. "You signed...Who?!"

var Seinfeld = {
  name: "Jerry Seinfeld",
  age: 50,
  quote: "Nooorrrman!"
};
  
var louisCK = {};
louisCK.name = "Louis CK";
louisCK.age = 50;
louisCK.quote = "Can you give it a minute?";


//2. "Here they come!"

var adamSandler = {
  name: "Adam Sandler", 
  age: 47,
  quote: "That's your home! Are you too good for your home?!"
};


//3. "Time is Money"

function Client (name, age,quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
}

kristenBell = new Client ("Kristen Bell", 33, "Do you wanna build a snowman?")
jimCarrey = new Client ("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!")


//If done correctly, the following test code should pass! Examine each, and ask questions if anything 
//looks new!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

//4. "Show 'em off!"

var clients = [Seinfeld, louisCK, adamSandler, kristenBell, jimCarrey]; 

function printDisplay (actor){
  console.log ("Name: "+ actor.name +"," +" Age: "+ actor.age +"," +" Quote: "+ "'" + actor.quote + "'" + ".")
}

for (i = 0; i < clients.length; i ++) {
  printDisplay(clients[i]);
}


//5. Bonus

//

//Reflections//

//Bridgette's Reflection 

// This was a great exercise for getting familiar with javascript syntax. Since I have a little more practice
// with Ruby, it was sometimes challenging to tanslate what I understand conceptually into code in this relatively
// unfamiliar language. I appreciated the exposure to object presentation and functions in JavaScript. 

// Working with Adrian was a pleasure. He was thoughtful and rabit-hole resistant. Our session was efficient and
// the overall tone of our dynamic was both cooperative and respectful in equal measure. I was impressed by many 
// of Adrian's suggestions and by the way he explained his thought process. 

// There was an important lesson learned here: Stypi might eat your homework so be sure to copy what you need into a 
// gist or sublime file and save it as soon as possible. You don't want to have to do everything all over again!! 


//Adrian's Reflection 
