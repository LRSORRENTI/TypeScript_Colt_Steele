"use strict";
// Now let's talk about the private modifer, 
// we can put private in front of 
// any property or method and that will 
// tell TS that this property is only ever 
// accessible inside that instance or class
// and should NOT be accessible publicly
class Game {
    constructor(gameName, systemName, rating) {
        this.serialNum = 22626;
        this.name = gameName;
        this.systems = systemName;
        this.rating = rating;
        this.secretMethod();
        // NOTE that we can instantiate 
        // the private method inside of 
        // the class:
    }
    secretMethod() {
        console.log('private method');
    }
}
const game = new Game("Dark Souls 3", ["Xbox",
    "Playstatiom", "PC"], 9.5);
console.log(game.name, game.systems[0], game.rating);
//  game.serialNum = 56774;
// game.secretMethod()
// if we hover over the error: 
//Property 'serialNum' is
// private and only accessible within class 'Game'.
// Using public and private together provides 
// clarity to any one else reading your code 
