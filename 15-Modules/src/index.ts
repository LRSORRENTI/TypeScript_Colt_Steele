// So now we used the keyword export in the 
// utilityExample.ts file, and we use the 
// 'import' keyword to bring those in to use 
// inside of index.ts, note that the file 
// we import from can't have a .ts file, it 
// must be .js

import {add, sample} from './utilityExample.js'

console.log("hello universe")

console.log(add(2, 4));

console.log(sample(['s', 'cheque', 'ambrose']));

