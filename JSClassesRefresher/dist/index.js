
console.log("working?");
console.log(12);
console.log("liteserver is updating now? ");

class Food {
    taste(){
      console.log("mmmm tasty")  
    }
    bleh(){
        console.log("bleh! not tasty ")
    }
}

const foodOne = new Food()
foodOne.taste()
foodOne.bleh()
console.log(foodOne)

const foodTwo = new Food()

foodTwo.bleh()