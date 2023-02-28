// So now we used the keyword export in the 
// utilityExample.ts file, and we use the 
// 'import' keyword to bring those in to use 
// inside of index.ts, note that the file 
// we import from can't have a .ts file, it 
// must be .js
import { add, sample as randomSample } from './utilityExample.js';
import { userHelper } from './User.js';
// the aboe two can be combined if wanted since, 
// they are from the same file
// import User, {userHelper} from "./User.js"
// the above is the equivalent of: 
// import User from "./User.js"
// import { userHelper } from './User.js';
// the User above could be named whatever, 
// could be import thingy from "./user.js"
// and it would work, with the default export
// also let's say we have a variable sample in 
// this file like const sample = 12;
// there will be an error so we use the 
// as keyword 
const sample = 12;
console.log("hello universe", sample);
console.log(add(2, 4));
console.log(randomSample(['s', 'cheque', 'ambrose']));
userHelper();
