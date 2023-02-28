"use strict";
// let's pretend this is an amazing 
// utility function file we just created 
function add(x, y) {
    return x + y;
}
function sample(arr) {
    // this generic func takes some type, 
    // an array of that type and returns 
    // an element of that type
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
// So now we have two utility functions we've split 
// into this file, so now let's say we want to import 
// the code from this file elsewhere in the project, 
// well right now, the above is in the shared global 
// scope, meaning inside our index.ts, ts knows 
// about the add and sample funcs already
// so if we do: 
const x = 12;
// then in the index.ts file do: 
// const x = 3; 
// We will get an error, cannot redeclare block 
// scoped variable x
// Which is the point of modules, they help us 
// separate code, make it modular
