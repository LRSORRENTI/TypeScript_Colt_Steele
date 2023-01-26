// earlier we touched on array types, for ex if 
// we have an array of nums and strings we can declare it like: 

const numsAndWords: (number | string | boolean)[] = [1, 'one', 2, 'two',
true, 7, false, 'yes']

// in essence all we do is wrap our union type in parentheses with 
// pipe union operand separating the types that will 
// be stored in our array

// also doesn't have to be primitive types, we can 
// use our own unique types just fine :
type Luke = {
    name: string,
    age: number
}

const newVar: Luke = {
    name: 'luke', 
    age: 29
} 

const randArray: (number | string | Luke)[] = [1, newVar, 'yes' ]