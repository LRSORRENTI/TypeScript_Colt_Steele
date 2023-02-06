// REOPENING INTERFACES

// Let's say we have an interface from 
// another file or even a third party library, 
// and we want to add to that interface, here's how 
// we do that

interface Dog {
    name: string,
    breed: string
    }


    // Now pretend that the above wasn't just created, 
    // we got this simple interface from a library and we 
    // need to add more to it

    interface Dog {
        age: number,
        greet(param1: string): string
}

const maggie: Dog = {
    name: 'maggie',
    breed: 'cava-corgi', 
    age: 2,
    greet(param1) {
        return `hi ${param1}`
    },
}