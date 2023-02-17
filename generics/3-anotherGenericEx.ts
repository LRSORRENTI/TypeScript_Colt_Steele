// Let's go over another example of a generic

// This time will have a func that will return 
// a random item from a passed in array

// Remember, we wouldn't use 'any' type on the 
// argument / param, we'd use the <T> or <Type> 
// annotation to tell TS "whatever type is passed in, 
// is the type that must be returned "

function getRandElement<Type>(arr: Type[]): Type{
 const randIndex = Math.floor(Math.random() * arr.length)
 return arr[randIndex]
}

console.log(getRandElement<string | number>(['Luke',"Bob","Sorr", 6]))

getRandElement<number | boolean>([1, 2, 3, true])
