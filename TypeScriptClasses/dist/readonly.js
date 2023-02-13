"use strict";
// We've seen readonly before in 
// the context of objects
class Person {
    constructor(name, occu, age) {
        this.name = name;
        this.occupation = occu;
        this.age = age;
    }
}
const luke = new Person("Luke", "WebDevHopefully", 29);
