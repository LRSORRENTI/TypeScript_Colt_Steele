"use strict";
console.log("working?");
console.log(12);
console.log("liteserver is updating now? ");

class Player {
  constructor(arg1, arg2 ){
   this.first = arg1;
   this.last = arg2;
  }
  taunt(){
    console.log("taunt")
  }
}

const player1 = new Player("Luke", "Sorrenti")

player1.taunt()

const player2 = new Player("Frank", "Sorrenti")

player2.taunt()

console.log(player1, player2)
console.log(player1.first, player1.last, 
  player2.first, player2.last)