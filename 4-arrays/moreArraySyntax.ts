// Array types can be typed by using 
//type annotation followed by empty 
// array brackets, like number[] for 
// an array of nums

// this will only allow data types specified 
// to be added to that array: 

const bools: Array<boolean> = []

// other way: 

const twoBools: boolean[] = []

//same outcome as above

//IT's also worth noting we can 
// work with custom types, not just 
//primitive data types


// the below is the pattern of the 
//object, it's a custom type 
// we've created and can now use

type Point = {
    x: number,
    y: number
}

const coords: Point[] = []

coords.push({x: 14, y: 9})

// and below TS throws errors if we 
//try to push alternate types to 
// the defined type above: number

coords.push({x: true, y: 'twelve'})