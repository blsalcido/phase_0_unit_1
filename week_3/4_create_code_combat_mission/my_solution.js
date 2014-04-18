// I worked [by myself, with:] on this challenge

// name: Bridgette Salcido 
// name: RJ Bernaldo

// Your mission description:
//  ________________
//  |          xxxM|
//  |   xxxxExxx   |
//  |   x    P     |
//  |___S__________|
//  S = Start point of hero
//  E = enemy
//  P = Potion
//  M = Endpoint
//
//  Get to the end of the maze, collect all potions, and destroy all enemies.
//
// Character name = *J4ck* L3 *c00l* 

// Pseudocode
// 
// Make *J4ck* L3 *c00l*  move up 2x
// Make *J4ck* L3 *c00l*  move right 4x
// Make *J4ck* L3 *c00l*  attack enemy 
// Make *J4ck* L3 *c00l*  move down 1x
// Make *J4ck* L3 *c00l*  say he likes potion
// Make *J4ck* L3 *c00l*  move up 1x
// Make *J4ck* L3 *c00l*  move right  2x
// Make *J4ck* L3 *c00l*  move up 1x
// Make *J4ck* L3 *c00l*  move right 4x

// Initial Code
var hero = {
  name: "*J4ck* L3 *c00l*",
  pos: {
    x: 4,
    y: 1
  }
}

hero.moveUp();
hero.moveUp();
hero.moveRight();
hero.moveRight();
hero.moveRight();
hero.moveRight();
hero.attackEnemy();
hero.moveDown();
hero.say("I like this potion!");
hero.moveUp();
hero.moveRight();
hero.moveRight();
hero.moveUp();
hero.moveRight();
hero.moveRight();
hero.moveRight();
hero.moveRight();

// Refactored Code
function up(space) {
  for (var i = 0; i < space; i++) {
    hero.moveUp();
  }
}
function down(space) {
  for (var i = 0; i < space; i++) {
    hero.moveDown();
  }
}
function right(space) {
  for (var i = 0; i < space; i++) {
    hero.moveRight();
  }
}

up(2);
right(4);
hero.attackEnemy();
down(1);
hero.say("I like this potion!");
up(1);
right(2);
up(1);
right(4);


// Reflection
// 
// This was a great exercise for reinforcing some previously touched upon
// javascript concepts such as calling functions on objects. We had a lot 
// of fun making the mission map seen within the description section of 
// this document. We stuck to the "function-calling conventions" that we  
// became familiar with while working on codecombat.com. So, where we noticed
// potential for improvement on our code was limited. To expand upon our 
// learning, we decided to have a detailed dicussion on how to implement  
// loops to create the functions that are seen on codecombat. This opened up 
// a really interesting conversation about the similarities and differences
// between javascript functions and Ruby method syntax. We each agreed that
// it is helpful to know at least programming concepts when venturing to learn
// a new programming language. This prepares one to learn more efficiently, 
// filling in blanks where naming conventions and syntax are concerned. 
//
//
//
