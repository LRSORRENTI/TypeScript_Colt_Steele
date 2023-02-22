"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// axios
// once we install axios and confirm it's in 
// our package.json, we have access to all the 
// features axios provides, 
// if you right click axios above and look 
// at type definitions you'll see all the 
// index.d.ts definitons are in that file
// also don't forget to add package files to the 
// git ignore, last time I pushed a gigantic 
// file with all the node modules and package lock 
// stuff to github and it took like 35 mins to complete 
// the push... oops 
// ===============================================
// LEt's make a basic get request w/ axios using 
// axios.get method
axios_1.default.get("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
    console.log("successful get??");
    console.log(response.data);
}).catch(error => {
    console.log("there was an error", error);
});
// above if you hover over .get, you'll see it returns 
// a Promise type, so it returns a promise
// then lets add the .then with res or response, log
// success if it succeeds, and then a .catch with e or 
// error which will log the error if there is one
// okay so after running node .\dist\index.js 
// in the terminal, we log 'successful get??'
// in the terminal, 
