import Dog from "./Dog";

export default class ShelterDog extends Dog{
constructor(name: string, breed: string,age: number,
    public shelterDog: boolean){
    super(name, breed, age)
}
}