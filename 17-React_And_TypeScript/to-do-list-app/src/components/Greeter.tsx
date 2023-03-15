import React from "react"; 
// in the function below, our 
// argument list could become very long 
// if we need to have many different arguments 
// to be passed in 

// so we can make an interface for the props


// function Greeter(props: {person: string}): JSX.Element {
//     return <h1>Hello there {props.person}!</h1>
// }

// export default Greeter;

// so we can make an interface for the props

interface GreeterProps  { 
 person: string;
 age: number;
}

// function Greeter(props: GreeterProps): JSX.Element {
//     return <h1>Hello there {props.person}! You are 
//     {props.age} years old</h1>
// }

// But something commonly done is to destructure from 
// the props


function Greeter({person, age}: GreeterProps): JSX.Element {
    return <h1>Hello there {person}! You are 
    {age} years old</h1>
}


export default Greeter;