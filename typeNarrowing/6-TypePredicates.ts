// TYPE PREDICATES

// This section is more complex than any of the other 
// type narrowing sections, might need to 
// go over and really practice them to 
// retain and learn how / why they're used 

// Type predicates allow custom functions 
// that can narrow the type of any value, 
// these special funcs have a special return 
// type called a 'predicate'

// And a predicate takes the form of
// parameterName is Type, like 

interface Cat{
    name: string,
    numLives: number
}

interface Dog{
    name: string;
    goodDog: boolean;
}

// let's make a func isCat that will tell us
// if some value is a Cat or not

// below we use the 'is' keyword after arg list, 
// this tells TS snimal is of type Cat

function isCat(animal: Cat | Dog): animal is Cat{
return (animal as Cat).numLives != undefined;
}

// the 'animal is Cat' is the key piece that tells 
// TS if it's a Cat or not 

function makeNoise(pet: Cat | Dog): string{
    if(isCat(pet)){
        pet
        // if we hover over pet above, TS 
        // doesn't know if it's Cat or Dog yet
        // but when we add the 'animal is Cat'
        // to the isCat func return type, and we 
        // hover over pet, TS now knows pet is 
        // a Cat, and in the isCat func, if 
        // we comment out the 'animal is Cat'
        // pet goes back to being Cat or Dog
        return "meow"
    }
    else{
        pet
        // and if we add an else, TS now realizes pet
        // must be a Dog, that's the only option left
    }
}

// 'animal is Cat' is the type predicate, 