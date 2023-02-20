"use strict";
// In this section we'll learn about 
// additonal TS modifiers, first is public
// By default in TS and JS every single 
// property , class, or method is public
//
class Animal {
    constructor(species, numLegs) {
        this.species = species;
        this.numLegs = numLegs;
    }
}
const dog = new Animal("Canine", 4);
dog.species;
// Remember, the pubic modifier is auto-set 
// on everything, but if it makes your code 
// more readable, and understandable, use 
// it prefixed to a given value like above
// If a value is public, it means it can 
// be accessed and is available anywhere
// Explicit 'public' prefix annotation 
// is typically used for code clarity
