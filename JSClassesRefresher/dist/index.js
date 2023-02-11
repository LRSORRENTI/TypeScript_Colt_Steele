"use strict";
console.log("working?");
console.log(12);
console.log("liteserver is updating now? ");
class Player{
  constructor(first, last){
      this.firstName = first;
      this.lastName = last;
  }
}
const player1 = new Player("Luke", "Sorrenti")
console.log(player1.firstName, player1.lastName)