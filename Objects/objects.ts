const myDogs = {
    name: 'Maggie',
    breed: 'Cava-Corgi',
    age: 1.5
}

function printDogName(dog: {name: string, breed: string}): void {
    console.log(`${dog.name} ${dog.breed}`)
}

printDogName({name: 'rey', breed: 'german shepherd'})