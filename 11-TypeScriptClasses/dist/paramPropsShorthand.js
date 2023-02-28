"use strict";
// In the docs, parameter properties, where 
// instead of having to first declare a propertt 
// and it's type before we intialize in the constructor 
// Which requires extra syntax, it can be 
// cumbersome, so there's a shortcut 
class PlayerThree {
    // public readonly first: string;
    // public readonly last: string;
    // private score: number = 0;
    constructor(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
    }
}
