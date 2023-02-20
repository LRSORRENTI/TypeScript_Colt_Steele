// the 'in' operator can help check if 
// a certain property exists in a given object

// this means we can use it to check if a value
// exists in an object accoring to it's type 
// alias or aliases before working with it

const pet = {
    name: "Cat",
    age: 10
}

// we can use the 'in' operator to check if 
// a value is in a given object like: 

"age" in pet // true

"breed" in pet // false

interface Moviez{
    title: string,
    duration: number
}

interface TVShow{
    title: string;
    numSeasons: number;
    episodeDuration: number;
    true: boolean;
}

function getRunTime(arg1: Moviez | TVShow){
    // in this example we can't use typeof 
    // to check for us, since typeof 
    // is used to check primitive values
    // so we use the 'in' operator
    if("mumSeasons" in arg1){
        return arg1.
    }
}