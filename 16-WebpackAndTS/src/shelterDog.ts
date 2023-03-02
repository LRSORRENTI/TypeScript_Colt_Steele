import Dog  from "./Dog";

export default class ShelterDog extends Dog{
    constructor(name: string, age: number, 
        breed: string, public shelter: boolean){
        super(name, age, breed)
    }
}