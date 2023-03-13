import Dog from "./Dog";
import {add, mult, sub, divi} from "./utils"
import ShelterDog from "./ShelterDog";
console.log('from index.ts ')

const buck = new Dog("Buck", "Lab-Coliie", 14)
buck.bark()

console.log(add(4, 6))
console.log(sub(4, 6))
console.log(mult(4, 6))
console.log(divi(4, 6))

const sparky = new ShelterDog("Sparky", "weimareiner", 
14, true)
sparky.bark()