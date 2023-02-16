// Interfaces describe the shape of an object, and 
// instead of using the extends keyword like 
// with classes, we use the implements keyword:

interface Colorful {
    color: string
}

class newColor implements Colorful{
 constructor(public color: string){

 }
}

const bluegreen = new newColor("bluegreen")

const faveColor = new newColor("aquamarine")

class Car implements Colorful{
    constructor( public brand: string ,
        public color: string){

    }
}

const myCar = new Car("mitsubishi", "white")

// So above we have two classes, newColor, and Car
// both follow the rules of the Colorful interface

interface Printable {
    print(): void;
}

class Shirt implements Colorful, Printable{
  constructor(public color: string){
   
  }
print(): void {
    console.log(`${this.color}`)
}
}

// This is very common, writing a class that will implement 
// a defined interface

interface IPerson {
    name: string;
    age: number;
  }
  
  class Persona implements IPerson {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const dave = new Persona("dave", 30)

  console.log(dave)