// Discriminated unions are a common 
// pattern in TS, they involve a literal 
// property that is common across 
// multiple types

// WE then narrow is down using that 
// literal property, below its __type: value here

type Rooster = {
    name: string,
    weight: number, 
    age: number
    __type: "Rooster"
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    __type: "Cow";
}

type Pig = {
    name: string,
    weight: number,
    age: number,
    __type: "Pig"
}

interface Sheep {
    name: string;
    weight: number;
    age: number;
    __type: "Sheep"
}
// So we've got three patterns now, two types and 
// an interface

// Now the above are simple examples, but 
// let's pretend they're very complex, all located in 
// different files, all of them have hundreds of 
// different properties, how do we determine 
// the commonalities b/w Rooster, Cow, And Pig?

// Well we really can't tell the difference since 
// they all have the exact same key value pairs, 
// in order to determine if something's a pig cow or 
// rooster

type FarmAnimal = Rooster | Cow | Pig; 

function getFarmAnimalSound(animal: FarmAnimal){
            animal
    // right now all we know is that animal
    // above is of type FarmAnimal, but 
    // which one? This is where discriminated 
    // union can assist, in the real world to do this, 
    // we add something to them like: 
    // kind: or type: or even __type:, inside 
    // the type or interface
    switch(animal.__type){
        case("Pig"):
          //  animal
            return "oink";
            case("Cow"): 
          //  animal
            return "moo";
            case("Rooster"):
            //animal
            return "bawk bawk";
            // now if we hover over animal, TS knows 
            // it's Pig
            default: 
            // we should never make it here!! IF 
            // we handled all cases correctly,
            // if for example we tried to pass in 
            // a farm animal that shouldn't be there,
            // we want the code to let us know, 
            // and if we add Sheep to the 
            // FarmAnimal type: type FarmAnimal = Rooster | Cow | Pig | Sheep
            // an error occurs below, and the reason is because 
            // we're not handing the case("Sheep")
            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck
        }
    }
const stevie: Rooster = {
        name: "stevie chicks",
        // RIP colts old  chicken stevie chicks, 
        // maimed and eaten by a raccoon, 
        // apparently raccoons eviscerate chickens 
        // quite brutally
        weight: 2,
        age: 1.5,
        __type: "Rooster"
        // if we try to set __type: to 
        // anything other than "Rooster"
        // TS will alert us of the error

}
    getFarmAnimalSound(stevie)

    // The takeaway here is adding that property that's 
    // in common in our types / interfaces, then
    // then inside the func use discriminated Union 
    // to narrow down the type based on the literal 
    // value assigned to determine which is which