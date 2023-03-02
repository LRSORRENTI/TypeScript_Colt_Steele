import Dog from "./Dog.js";
import ShelterDog from "./shelterDog.js";
import { add, multiply, divide, subtract } from "./utilities.js";
const maggie = new Dog("Maggie", 2, "cava-corgi");
maggie.bark();
console.log("from index.ts");
console.log(add(4, 5), multiply(4, 5), subtract(20, 4), divide(10, 2));
const buffy = new ShelterDog("Max", 3, "lab", true);
