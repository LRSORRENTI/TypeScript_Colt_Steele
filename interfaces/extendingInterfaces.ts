// One extra thing to do is extend or inherit interfaces, 
// similar to OOP where a child class can inherit things 
// from a parent class

// To do this we use the 'extends' keyword

// Let's go back to our Dog interface

interface Dog {
    name: string;
    breed: string;
    age: number;
    bark(): string
}

interface ExtraDog {
    isHappy: true
}

interface ServiceDog extends Dog, ExtraDog {
    job: string;
    yearsOfService: number;
}

// So the above will also require the values from the 
// dog interface, w/o having to re-type all the other stuff out

const skipper: ServiceDog = {
    name: 'skipper',
    breed: 'german shepherd',
    age: 4,
    bark() {
        return 'woof'
    },
    isHappy: true,
    job: 'Police Dog',
    yearsOfService: 2
}

// We can also extend multiple interfaces: using a comma:

interface Human {
    name: string;
}

interface Worker {
   readonly id: number, 
   email: string;
}

interface Engineer extends Human, Worker{
    specialty: string, 
    level: string,
    skills: string[];
}

const Ry: Engineer = {
    name: 'ry',
    id: 123124,
    email: 'ry@gmail.com',
    specialty: 'electrical',
    level: 'senior',
    skills: ['electrical', 'aerospace', 'civil'],

}

// Interesting that the extension on the dog interface is throwing 0 
// // errors but TS is saying: 

// Type '{ name: string; id: number; email: string;
//      specialty: string; level: string; skills: string[]; }
//      ' is missing the following properties from type 'Engineer':
//  onmessage, onmessageerror, postMessage, terminate, and 4 more

// I'll need to review this