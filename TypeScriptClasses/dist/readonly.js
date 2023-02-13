"use strict";
// We've seen readonly before in 
// the context of objects, but we 
// can use them in classes
class Person {
    constructor(name, occu, age) {
        this.name = name;
        this.occupation = occu;
        this.age = age;
    }
}
const luke = new Person("Luke", "WebDevHopefully", 29);
luke.name = "LUKE";
// trying to change luke.name won't work since 
// we made name readonly in the class definition
luke.occupation = "Full Stack Web Developer";
// but we can change any other property
// This can be very useful, and can make it clear 
// that a given value SHOULD only ever 
// be read, not written to, in your code, 
// also makes it easier for other devs to see 
// what you're values should be
