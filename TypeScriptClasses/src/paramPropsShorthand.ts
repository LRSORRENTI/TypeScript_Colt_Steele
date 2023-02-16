// In the docs, parameter properties, where 
// instead of having to first declare a propertt 
// and it's type before we intialize in the constructor 

// Which requires extra syntax, it can be 
// cumbersome, so there's a shortcut 

class PlayerThree {
    // public readonly first: string;
    // public readonly last: string;
    // private score: number = 0;

   constructor(
    public first: string,
     public last: string, 
     private score: number){

     }
// the above constructor is equivalent to what's below
// it's a shortcut to cleaner TS code, it removes 
// the need for this.value = something etc..

    // constructor(x: string, y: string){
    //     // this.first = x;
    //     // this.last = y;

    }
