import Dog from "./Dog";
export default class ShelterDog extends Dog {
    constructor(name, breed, age, shelterDog) {
        super(name, breed, age);
        this.shelterDog = shelterDog;
    }
}
