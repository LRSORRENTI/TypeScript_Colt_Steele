import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './components/Greeter';

const strOne: string = "luke";

console.log("hello from ts", strOne)
console.log(1)


const func = <T,>(x: T): T => {
  return x;
}
// This is the generic func syntax for arrow functions,
// must include trailing comma ',' postfixed to <T,>
func(1)

// But this can be avoided if writing a regular 
//function, not an arrow function

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Luke
        </a>
        <Greeter />
        <Greeter />
        <Greeter />
      </header>
    </div>
  );
}

export default App;
