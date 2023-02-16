var numz = [];
var colorz = [];
// a built in method used all the time 
// is document.querySelector, or getElementbyWhatever
var inputElz = document.querySelector("#username");
// so we can tell TS with < > that this value 
// is this type, and it will return HTMLInputElement type
// And remember, we add the '!' postfixed to the value, 
// this tells TS it will NEVER be null
console.dir(inputElz);
inputElz.value = "you123";
var btn = document.querySelector(".btn");
// also quick reminder, we use CSS syntax for grabbing 
// values if they're classes or id's, . for class, # for id, 
// same as it would be in a css file
// So in essence, we control the return 
// type by providing the type it should 
// return inside the < > angle brackets 
