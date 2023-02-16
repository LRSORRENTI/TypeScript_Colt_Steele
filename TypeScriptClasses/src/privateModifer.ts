// Next up let's go over the private modifier
// This will tell TS a given value or method 
// should only ever be accessible from 
// inside that class

// There should be 0 ways of accessing the 
// private value outside the class: 

class Dog {
     private owner: string = "luke";
    public breed: string;
    public age: number;

    constructor( breed: string,
        age: number){
            this.breed = breed;
            this.age = age;
        }

        private secretMethod(): void{
        console.log("secret method")
       }

    }

    const dogg = new Dog( "Cava-Corgi", 2 )

    console.log(dogg)

    console.log(dogg.owner)

    dogg.owner = "john"

    console.log(dogg.owner)

    console.log(dogg.owner)

    dogg.secretMethod()

    // IMportant to remember, this will compile 
    // to JS just fine, JS doesn't care that a property 
    // has private set to it, it's only in TS where 
    // the errors are highlighted, and private 
    // is only on the TS side of things , it tells 
    // TS this property or method should only be accessible 
    // inside the class in which it's defined