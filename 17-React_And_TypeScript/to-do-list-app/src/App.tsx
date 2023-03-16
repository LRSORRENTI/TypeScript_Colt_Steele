import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './components/Greeter';
import RenderListItems from './components/ShoppingList'
import ShoppingList from './components/ShoppingList';

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
  const items = [
    {id: 1, productName: "Eggs", quantity: 12},
    {id: 2, productName: "Milk", quantity: 1},
    {id: 3, productName: "Protein Powder", quantity: 1}
]
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
        {/* <Greeter person = "Luke" age={29}/>
        <Greeter person = "Frank" age={74} />
        <Greeter person = "Catherine" age={69} /> */}
        {/* <RenderListItems listName='eggs'/>
        <RenderListItems listName='milk'/>
        <RenderListItems listName='protein powder'/> */}
        
        <div>{ <ShoppingList items={items} />}</div>

      </header>
    </div>
  );
}

export default App;
