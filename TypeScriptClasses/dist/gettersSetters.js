"use strict";
// Up next is getters and setters, 
// 
class PlayerFour {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("secret method");
    }
    // in TS we have classes w/ getters 
    // and setters, or Object Accessors,
    // lets add a computed property, we 
    // use this.first and this.last in 
    // a string template literal
    get FullName() {
        return `${this.first} ${this.last}`;
        // right now we don't have a stter for 
        // fullName, so by default TS will make them 
        // readonly any time it sees a property that 
        // does not have a setter 
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("score can't be negative");
        }
        this._score = newScore;
    }
}
const lukey = new PlayerFour("Luke", "Sorrenti", 100);
// lukey.FullName = "yo"
// So above an error will occur, it 
// says cannot assign b/c it's a 
// readonly property
lukey.score = 99;
console.log(lukey);
lukey.score = -77;
// Now TS isn't capable of knowing that 
// score shouldn't be negative, but in the 
// console, the error is there: "score can't be 
// negative"
// But it will complain if we set it to 
// a different data type: 
// lukey.score = "luke"
