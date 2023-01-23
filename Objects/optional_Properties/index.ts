// OPTIONAL PROPS

// let's look at that coordinate example but 
// add z as an optional prop


type Point = {
    x: number;
    y: number;
    // to make an optional prop
    // we add '?' directly after 
    // the key
    z?: number;
}

const myPoint: Point = {x: 1, y: 3 }