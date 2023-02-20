// Next option for type narrowing is instanceof

// instanceof is a JS operator that allows 
// checking if one thing of an instance is 
// of another (remember prototypes??)

// This can help narrow types when working with 
// classes especially

// instance of will tell us somewhere 
// on the prototype chain a given value exists

function printFullDate(date: string | Date){
    if(date instanceof Date){
        // if we hover over date below, we see 
        // that the type has been narrowed 
        // down to the Date type, and 
        // string is gone as an option
        date
       console.log (date.toUTCString())
    }
    else{
       console.log(new Date(date).toUTCString())
       // and if we hover over date 
       // above, we see that TS can now be sure 
       // that date has to be a string type
    }
}

// We can do this with custom classes as well

class User{
    constructor(public username: string ){

    }
}

class Company{
    constructor(public name: string){

    }
}

function printWholeName(entity: User | Company){
    if(entity instanceof User){
        entity
        // hover over entity here we see that
        // entity is of type user
    }
    else{
       entity
       // hover over entity here we see that
       //  entity is of type Company
    }
}