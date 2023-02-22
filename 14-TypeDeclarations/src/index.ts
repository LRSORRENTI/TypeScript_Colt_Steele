import axios from "axios";

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

axios.get<number>("https://jsonplaceholder.typicode.com/users/1")
.then(response => {

    console.log("successful get??")
    console.log(response.data)
}).catch(error =>{
    console.log("there was an error", error)
})
// above if you hover over .get, you'll see it returns 
// a Promise type, so it returns a promise

// then lets add the .then with res or response, log
// success if it succeeds, and then a .catch with e or 
// error which will log the error if there is one

// okay so after running node .\dist\index.js 
// in the terminal, we log 'successful get??'
// in the terminal, 

// now after adding the console.log(response.data)
// we get successful get??
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: { lat: '-37.3159', lng: '81.1496' }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
//   }

// So it's working, the get was successful and we get 
// the single json object for user #1

// So that json object above, let's use it as 
// an interface: 

interface User{
    id: number;
    name: string;
    username:string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchphrase: string;
        bs: string;
    }
}