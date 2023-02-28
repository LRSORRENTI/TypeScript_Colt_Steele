// CLass fields in TS, 


class PlayerOne {
    first: string;
    last: string;
    score = 0;
    // The above is similar to the 
    // class fields in JS, except w/o the 
    // octothorpe, and we're utilizing 
    // type inference with score = 0 
    // We could do: 
    // score: number = 0 
    //but Type Inference works well here 
    constructor( firstName: string, 
        lastName: string){
        this.first = firstName;
        this.last = lastName;
    }
}

