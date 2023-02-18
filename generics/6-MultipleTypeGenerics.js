// WE can also write generics with more than one 
// type parameter
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// A simple example to illustrate this is a 
// function called "merge" that will 
// accept two objects as arguments 
// then merge the two objects into one final 
// object with properties from both 
// passed in objects 
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// so right now the above function will merge 
// the properties of two objects passed in as 
// arguments
console.log(merge({ name: "luke" }, { dogs: ["Rey", "Maggie"] }));
// So what type are we getting back? If we store 
var comboObj = merge({ name: "luke" }, { dogs: ["Rey", "Maggie"] });
// right now in TS the type of comboObj is 'any'
// Which by this point in the course we know 'any' 
// should be avoided as much as possible, so 
// what we can go instead is create a generic function
// remember the syntax is <Type> or <T>
// function realMerge<Type1, Type2>(obj1: Type1 , obj2: Type2){}
// or in the real world you'll almost certainly see 
// <T, U>
// And it following the naming convention like in loops 
// with for i, for j for k etc.. it goes down the 
// alphabet
// <T, U, V, W, X, Y, Z> 
function realMerge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newCombo = realMerge({ name: "Mc" }, { pets: ["Molly", "Bear"] });
// Now if you hover over realMerge above you'll 
// TS is smart it recognizes that the return type 
// will be an intersection of T and U: 
//function realMerge<T, U>(obj1: T, obj2: U): T & U
// So that's why adding a generic <T, U> or <Type1, Type2> 
// above is so crucial, TS then can infer what the 
// return type should always be no matter the structure
// of what's passed in, what's passed 
// Just a quick note, after research online, it says:
// // In TypeScript, the realMerge 
// function you've defined is a 
// generic function that takes 
// two parameters of type T and U.
// When you use the spread operator 
// to merge the two objects, 
// TypeScript will infer the
//  type of the resulting
//   object based on the types of T and U.
// // However, TypeScript won't 
// automatically infer the
//  return type of the 
//  function based on the 
//  argument types. If you don't
//   explicitly specify the
//    return type, TypeScript 
//    will infer it as a union
//     type of T and U (i.e., T | U), 
//     which represents a type 
//     that could be either T or U.
// // To ensure that the return
//  type of the function reflects
//   the argument types, you can 
//   use an intersection type to 
//   specify that the return type
//    should be the combination of 
//    T and U, like this:
// // typescript
// // Copy code
// // function realMerge<T, U>(obj1: T, obj2: U): T & U {
// //     return {
// //         ...obj1,
// //         ...obj2
// //     } as T & U;
// // }
// The strange thing is Colt is saying that that 
// both are fine, just don't leave it as 'any'
