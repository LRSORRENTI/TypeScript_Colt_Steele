// Truthiness Guards

// Truthiness type guards involve 
// checking a value for being truthy or 
// falsy before working with it, this is 
// useful for avoiding errors when a value 
// could potentially be null or undefined: 

const printLetters = (word: string | null) => {
    if (!word) {
        // if word is null do not loop
        console.log("no word provided");
    } else {
        // Only loop if word is exists or truthy 
        for (const letter of word) {
            console.log(letter);
        }
    }
};

// another way of writing the above func:

const logLetters = (word?: string) => {
    if(word){
        for(let char of word){
            console.log(char)
        }
    } else {
            console.log("didn't pass in a word ")
        }
    }


const el = document.getElementById("idk")

// the above snippet, if we hover over el, 
// ts says it can be an HTMLElement | null

// what we can do is implmement a truthy check, 
// to see if that element is truthy

if(el){
    el
} else {
    el
}
// now if we hover over el inside that conditional 
//check, notice that null is gone, it says el is 
// exclusively an HTMLElement, no more union type with 
// null

// and if we hover over el in the else statement, 
// TS knows it must be null if we get to that point 
// in the conditional check