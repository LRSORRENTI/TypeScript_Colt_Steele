// The classic example is a function called 
// identity


function numIdentity(item: number ): number{
    return item;
}

function strIndentity(item: string): string{
    return item;
}

function boolIdentity(item: boolean): boolean{
    return item;
}

// function identity(item: any): any{
//     return item;
// }

// the above function defeats the purpose of TS
// so that't not ideal, and we need to avoid using 
// any when we can so this is where a generic func 
// will come in handy

function identity<Type>(item: Type, item2: Type): Type{
console.log(item, item2)
    return {(item , item2)};
}

function secondIdentity<T>(item: T): T{
    return item;
}

// The above is two ways of writing the same, 
// <T> is more comman than <Type> but <Type> 
// is a little clearer

// Now when we call the function, the proper 
// annotation is: 

identity<string>("I'm a string", "two")

identity(true, true)

type newOne = {
   num: number;
   str: string;


}

identity<newOne>({num: 12, str: "yes"}, 
                   {num: 1, str: "one"})

                   console.log(identity)

// So we've established with the <T> or <Type> 
// in the function declaration that, whatever 
// type that input type is, that's the type 
// that should be returned, so TS checks to see
// what type is passed in as an argument, then 
// remembers that type, so that the specific 
// instance that function call is called, it will 
// know what type it should return

interface Cat{ 
    name: string; 
    breed: string;
    age: number; 
    asAlive: boolean;
}

// need to work on the below, throwing error

identity<Cat>({name: "oreo", isAlive: false}}, {isAlive: false})


console.log(identity)