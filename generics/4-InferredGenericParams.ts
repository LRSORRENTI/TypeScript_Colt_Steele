// TS can infer generic types as well, like 
// if we did: let x = 23, we don't necessarily need 
// to annotate x like: let x: number = 23, 
// TS can infer that x is supposed to be a number 

function rand<T>(arr: T[]): T{
    const randItem = Math.floor(Math.random() * arr.length);
    return arr[randItem]
}

console.log(rand<boolean>([true, false, true]));

// so above we're telling TS this is a list or 
// array of booleans, but we can omit the 
// <boolean> and TS will infer the type for us

console.log(rand([1, "true", false, null, undefined]))

// The catch with using inference is that 
// with certain types like 
// const btn = document.querySelector<HTMLButtonElement>(".btn")
// There's no possible way for TS to infer that htmlbuttonelement 
// type, that's why with a lot of types like that we 
// must tell TS that's the type 

// So TS will know that there's a relationship 
// b/w the argument type, and the return type, 
// TS will infer when we annotate the <T> or <Type>
// keep in mind, like a lot of things, there's 
// a time and a place for both