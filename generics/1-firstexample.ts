const numz: Array<number> = []

const colorz: Array<string> = []

// a built in method used all the time 
// is document.querySelector, or getElementbyWhatever

const inputElz = document.querySelector<HTMLInputElement>("#username")!;
// so we can tell TS with < > that this value 
// is this type, and it will return HTMLInputElement type

// And remember, we add the '!' postfixed to the value, 
// this tells TS it will NEVER be null

console.dir(inputElz)
inputElz.value = "you123"

const btn = document.querySelector<HTMLButtonElement>(".btn")!;
// also quick reminder, we use CSS syntax for grabbing 
// values if they're classes or id's, . for class, # for id, 
// same as it would be in a css file

// So in essence, we control the return 
// type by providing the type it should 
// return inside the < > angle brackets 