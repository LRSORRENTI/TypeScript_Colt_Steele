// let's practice writing TS union types with functions

function myFunc(param1: number | string, param2: boolean | number): string{
    if(param1 === param2){
        console.log("same num")
        return 'same num'
    }
    else{
    console.log(`${param1} not the same as ${param2}`)
    return  `${param1} not the same as ${param2}`
    }
}

const printAge = (age: number | string) => {
    console.log(age)
    return age
}
 
// it gets complicated when we use a method inside of 
// a function that may not be available on a given data type:

function calcTax(price: number | string, tax: number){
    // return price * tax 
           // ^ this will have TS throw a 
           // warning, since price could possibly be 
           // a num at some point

           // we could do something called 'type narrowing'
           // using if statement conditional checks

           if( typeof price === "string"){
            //  THE ABOVE IS OUR TYPE NARROWING,
            // IF PRICE IS A STRING, DO THIS TO CONVERT 
            // TO A NUM
              price = parseFloat(price.replace("$", ""))
              //above we convert the string if any that's 
              // passed in as the first argument using parseFloat
              // which turns the string into a num
           }
              console.log(price * tax)
              return price * tax
               // the only way the above will run, is 
               // if price is of type string
}