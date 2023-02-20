let age: number | boolean = 21

// We won't usually use union types when we know 
// the type at runtime

//

age = true;

age = "yes"

// We could also add additional pipe characters if 
// needed, but it's not recommended, it's preferable to 
// be as narrow as possible in TS

// using these pipe characters can be useful if 
// we don't know what the variable will store after run time

let newAge: number | null | undefined = 29

// Note this also works with custom types, if we 
// use our Point type from before :

type Point = {
 x: number , 
 y: number
}

type Locate = {
   latit: number,
   longi: number
}

let  coords: Point | Locate = {x: 12, y: 44}

// the above is setting the default values 
//to the Point type

coords = {latit: 12, longi: 55}

// the above is now saving the values to the 
// locate type pattern