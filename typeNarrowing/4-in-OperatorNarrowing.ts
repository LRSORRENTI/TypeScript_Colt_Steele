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

function getRunTime(media: Moviez | TVShow){
    // in this example we can't use typeof 
    // to check for us, since typeof 
    // is used to check primitive values
    // so we use the 'in' operator
    if("true" in media){
        return media.numSeasons * media.episodeDuration;
    }
    media
    // now if we hover over the above, TS 
    // knows we're working with media of type 
    // moviez, and that's b/c of the return statement
    // 
}

getRunTime({title: "Amadeus", duration: 160})
// above works fine, we're passing in all the 
// required values needed for Moviez

getRunTime({title: "Game of thrones", numSeasons: 8,
episodeDuration: 60})

// above is not valid, we're not passing in all the 
// values for TVShow, if we add true: true, error 
// goes away

getRunTime({title: "Game of thrones", numSeasons: 8,
episodeDuration: 60, true: true})