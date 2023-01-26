// INTERFACES and TYPE ALIASES are two 
// ways to accomplish the same thing, some of the time 

// With interfaces, we can only describe the shape of an object

// with type aliases we can do things like:

type Color = 'red' | 'green' | 'blue';

// to achieve the same with an interface it would be: 

interface Colors {
    r: string; 
    g: string;
    b: string;
}

const rgb: Colors = {
    r: 'red',
    g: 'green',
    b: 'blue'
}

// type Chicken = {
//     breed: string
// }

// type Chicken = {
//     numEggs: number
// }

// the above doesn't work, but we could add on using an interface 

interface Chicken {
    breed: string;
}
interface Chicken {
    numEggs: number;
}

interface newChicken extends Chicken{
    bok: () => {'bok bok'}
}

