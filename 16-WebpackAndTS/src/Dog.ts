export class Dog{
    constructor(public name: string,
        public age: number, 
        public breed: string){

        }
        bark(){
            console.log("ruff ruff ")
        }
}