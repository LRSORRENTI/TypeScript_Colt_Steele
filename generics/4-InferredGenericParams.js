// TS can infer generic types as well, like 
// if we did: let x = 23, we don't necessarily need 
// to annotate x like: let x: number = 23, 
// TS can infer that x is supposed to be a number 
function rand(arr) {
    var randItem = Math.floor(Math.random() * arr.length);
    return arr[randItem];
}
console.log(rand([true, false, true]));
// so above we're telling TS this is a list or 
// array of booleans, but we can omit the 
// <boolean> and TS will infer the type for us
console.log(rand([1, "true", false, null, undefined]));
