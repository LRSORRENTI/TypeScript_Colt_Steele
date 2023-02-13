
// We've seen readonly before in 
// the context of objects


class Person {
    name: string;
    occupation: string;
    age: number;

    constructor(name: string,
        occu: string, age: number){
            this.name = name;
            this.occupation = occu;
            this.age = age;
        }
}

const luke = new Person("Luke", "WebDevHopefully",
29)