"use strict";
// So now we used the keyword export in the 
// utilityExample.ts file, and we use the 
// 'import' keyword to bring those in to use 
// inside of index.ts, note that the file 
// we import from can't have a .ts file, it 
// must be .js
Object.defineProperty(exports, "__esModule", { value: true });
const utilityExample_js_1 = require("./utilityExample.js");
console.log("hello universe");
console.log((0, utilityExample_js_1.add)(2, 4));
console.log((0, utilityExample_js_1.sample)(['s', 'cheque', 'ambrose']));
