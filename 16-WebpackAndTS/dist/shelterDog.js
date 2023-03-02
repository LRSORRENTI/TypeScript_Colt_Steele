import Dog from "./Dog";
export default class ShelterDog extends Dog {
    constructor(name, age, breed, shelter) {
        super(name, age, breed);
        this.shelter = shelter;
    }
}
