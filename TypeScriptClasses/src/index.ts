// The proper way to tell TS that 
// the constructor params should be strings,
// is like this:

class Player {
    first: string;
    last: string;
    constructor( firstName: string, 
        lastName: string){
        this.first = firstName;
        this.last = lastName;
    }
}

// Right after the first opening '{' 
// we use the type annotations for the upcoming 
// params, 

const newPlayer = new Player("Luke", "Sorrenti")
console.log(newPlayer)