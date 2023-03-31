// INTERFACES 

//  Interfaces server the exact same purpose as type aliases, 
// w/ a different syntax 

// They are used to create modular, more reusable types that 
// help define the shape of a given object

// type Point = {
//     x: number, 
//     y: number
// }
interface newerPoint {
    x: number,
    y: number
}
// the above is a custom type we've just created, where each 
// value must be a number

const newPoint: Point = {
    x: 12, 
    y: 5
}

// The reason we're going over type aliases again is because 
// they are similar

// Interfaces allow us to define the shape of an object

// for ex: 

interface Person {
    name: string,
    age: number
}

type newPerson = {
    name: string,
    age: number
}

// type Point = {
//     x: number, 
//     y: number
// }


// let's remake point as an interface

interface Point {
    x: number, 
    y: number
}

const pnt: Point = {
    x: 12, 
    y: 55
}