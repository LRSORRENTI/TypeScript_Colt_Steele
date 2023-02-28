"use strict";
// So we have the public, private modifiers, 
// there's another: protected
// Protected is used when dealing with 
// inheritance, 
class Doggy {
    constructor(breed, age) {
        this.owner = "luke";
        this.breed = breed;
        this.age = age;
    }
    secretMethod() {
        console.log("secret method");
    }
}
class SuperDog extends Doggy {
    constructor() {
        super(...arguments);
        this.isAmazing = true;
    }
    updateOwner() {
        this.owner = "luke";
    }
}
// essentially, protected will allow 
// child classes, or extended classes to allow 
// child classes to have access to things 
// from the parent classes 
// But if the need to make something only 
// ever accessible inside of a class, use private
// public = available anywhere
// private = available only inside the class it's 
// defined
// protected = available in any child or extended 
// classes of parent class 
