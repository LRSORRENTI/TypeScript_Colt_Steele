// TYPE NARROWING 

// Type narrowing refers to a common 
// situation where we have a less precise 
// type like a union type: string | number
// And we need to narrow it down between 
// that union type of string and number 

// Below we have a func, and let's say 
// if we pass in a number it will triple it, 
// if we pass in 3 it returns 9, and 
// if we pass in a string it will repeat the 
// string 3 times, "luke" becomes "lukelukeluke"

// Not a practical example but it illustrates 
// that the func will have differing behavior based 
// on argument type passed in

// at face value we can't just put inside the 
// func 'return  value * 3' b/c it could be a string 

// and likewise we can't say 'return value.repeat(3)'
// since it could be a number

// So the solution is to become more precise, we 
// need to narrow down the type inside the func

// The means we need some conditional checks, and the 
// easiest way to do this in TS is with a 'typeof guard'

// typeof Type Guards involve a type check before 
// ever working with a value, since union types 
// allow multiple types, we can first check 
// what came through before working with it


function triple(value: number | string){
 if(typeof value === 'string'){
    return value.repeat(3);
 }
return value * 3;
}

const isTeenager = (age: number | string) =>{
    if(typeof age === "string"){
        // if age is string do this
        console.log(age.charAt(0) === 1);
    }
    if(typeof age === "number"){
        // if age is num do this
        console.log(age > 12 && age < 20)
    }
}

// most of the time you'd just use typeof to check the 
// type, and that works if we know 100% we're 
// working with primitives, like if we did typeof [1.2.3]
// typeof says thats an object, even though it's an array

// And as a note this concept of a typeof guard, 
// guard just means using typeof for a conditional 
// check

