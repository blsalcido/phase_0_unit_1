// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// Rescue Mission Pseudocode 

// Move Tharin down x2, 
// Move Tharin right x2,
// Move Tharin left x1, 
// Move Tharin Up x2, 
// Move Tharin right x2, 
// Move Tharin down x1, 
// Make Tharin Attack Troll thing
 
 
// Rescue Mission Solution

// this.moveDown();
// this.moveDown();
// this.moveRight();
// this.moveRight();
// this.moveLeft();
// this.moveUp();
// this.moveUp();
// this.moveRight();
// this.moveRight();
// this.moveDown();
// this.attackNearbyEnemy();


// Grab The Mushroom Pseudocode 

// Move Tharin Down;
// Move Tharin up x2;
// Move Tharin right; 
// Move Tharin left; 
// Move Tharin Up; 
// Make Tharin attack enemy;

// Grab The Mushroom Solution 

// this.moveDown();
// this.moveUp();
// this.moveUp();
// this.moveRight();
// this.moveLeft();
// this.moveUp();
// this.attackNearbyEnemy();
 
// Drink Me Pseudocode

// Make Tharin attack first enemy;
// Move Tharin right;
// Move Tharin down;
// Move Tharin up;
// Move Tharin right; 
// Make Tharin attack enemy;

// Drink Me Solution 

// this.attackNearbyEnemy();
// this.moveRight();
// this.moveDown();
// this.moveUp();
// this.moveRight();
// this.attackNearbyEnemy();


// Taunt The Guards Pseudocode

// Move Tharin right;
// Tell Phoebe to follow Tharin;
// Move Tharin right x2;
// Move Tharin up;
// Move Tharin right;
// Tell phoebe to attack;  // I don't know why I had to type this twice for the code to work
// Tell Tharin to attack;  // Same as above.
// Tell Phoebe to follow Tharin again;
// Move Tharin right x2; 

// Taunt The Guards Solution

// this.moveRight();
// this.say("Follow me.");
// this.moveRight();
// this.moveRight();
// this.moveUp();
// this.moveRight();
// this.say("Attack!");
// this.say("Attack!");
// this.attackNearbyEnemy();
// this.attackNearbyEnemy();
// this.say("Follow me.");
// this.moveRight();
// this.moveRight();

// It's A Trap Pseudocode 

// Move Tharin down x2;
// Make Tharin lure orge;
// Move Tharin up; 
// Make Tharin tell assasins to attack;
// Move Tharin up;

// It's A Trap Solution

// this.moveDown();
// this.moveDown();
// this.say("Hey There!");
// this.moveUp();
// this.say("Attack!");
// this.moveUp();

// Taunt Pseudocode

// Insult the orge four times 

// Taunt Solution 

// this.say("What's up, orge!");
// this.say("Nice hat, orge!);
// this.say("Did you make it yourself?");
// this.say("I wish I was as cool as you, orge!");
 
// Cowardly Taunt Pseudocode 

// Make Tharin run towards guards;
// Make Tharin say something to guards;
// Make Tharin run for cover;

// Cowardly Taunt Solution 

// this.moveXY(57,29);
// this.say("Hey There!");
// this.moveXY(70,10);

// Commanding Follower Pseudocode

// Make troops follow Tharin;
// Move troops towards enemy strongpoint;
// Tell troops to attack engage enemy;
// Move Tharin to safety;

// Commanding Follower Solution 
 
// this.say("Follow me, troops!");
// this.moveXY(58,36); 
// this.say("Attack!");
// this.moveXY(72,23);

// Mobile Artillery Pseudocode 

// Move cannon to center of enemies;
// Attack enemies;
// Attack large orges with second cannon;
// Attack enemies;
// Attack large orges with second cannon;

// Mobile Artillery Solution 

// this.moveXY(45,41);
// this.attackXY(70,56);
// this.attackXY(59,49);
// this.attackXY(50,67);
// this.attackXY(45,51);
 

// What is this referring to? Think programming-wise rather than in the terms of the game.

//This is referring to the object name

// What does the () do in JavaScript?

// () holds value arguments that are passed in as parameters

// What is the point of the semicolons?

//  To separate statements 


// Reflection:
// Write your reflection here.

// This was a lot of fun. I really wish we had this program back in middle school. 
// I loved the epic music on code combat and the entire exercise felt more like 
// I was playing around than doing an assignment, even in spite of having learned
// a thing or two. I'm confused about the Taunt the Guards exercise. I don't know 
// why I had to say attack and attackNearByEnemy twice in order for the code to 
// pass. It wouldn't work otherwise - I tried several other solutions. I was really 
// not looking forward to getting started on work today so, this was a really nice, 
// lively change of pace and exactly what I needed to break up the normal experience 
// of completing DBC challenges. 
