const myDogs = {
    name: 'Maggie',
    breed: 'Cava-Corgi',
    age: 1.5
}

function printDogName(dog: {name: string, breed: string}): void {
    console.log(`${dog.name} ${dog.breed}`)
}

printDogName({name: 'rey', breed: 'german shepherd'})

let coordinate: {x: number, y: number} = {x: 34, y: 2}

function makeRandCoordinate(param1:number, param2: number){
    console.log(param1 * param2);
    return param1 * param2;
}

makeRandCoordinate(234, 2)

function add(sum: {num1: number, num2: number}): void {
    console.log(sum.num1 + sum.num2)
}

add({num1: 5, num2: 8})

printDogName({name: 'molly', breed: 'rottweiler', age: 7})

//The reason why the above is underlining an error for the 
//age is because TS devs decided it's better to not allow 
//extra stuff to be passed in, if we want to add extra key 
//value pairs to the object we must first create a new variable 
// and store the extra key value pairs after the main object's 
//key value pairs, like below, we've created a variable, added 
//the age to the end after name and breed, and voila! We're 
//good to go

const ageOfDog = {name: 'molly', breed: 'rottweiler', age: 7}
printDogName(ageOfDog)