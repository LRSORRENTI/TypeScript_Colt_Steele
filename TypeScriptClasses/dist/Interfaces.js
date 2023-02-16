"use strict";
// Interfaces describe the shape of an object, and 
// instead of using the extends keyword like 
// with classes, we use the implements keyword:
class newColor {
    constructor(color) {
        this.color = color;
    }
}
const bluegreen = new newColor("bluegreen");
const faveColor = new newColor("aquamarine");
class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}
const myCar = new Car("mitsubishi", "white");
class Shirt {
    constructor(color) {
        this.color = color;
    }
    print() {
        console.log(`${this.color}`);
    }
}
class Persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const dave = new Persona("dave", 30);
console.log(dave);
