// when working with arrays we'll tell TS 
// the following is an array of strings, 
// or numbers: 

//string array w/ 2 ways of 
// writing, both syntax will work

// first way:
let names: string[] = ["hello", "world"]

//second way: 

let namesTwo: Array<String> = ["hello", "world"]


// number array

let ages: number[] = [19, 24, 36]

let newAges: Array<number> = [19, 24, 36]


// and if I try to add string to a numbers 
// array TS will throw and error: 

ages[0] = "luke"

ages.push(true)

names.push(12)

const activeUsers: string[] = []

activeUsers.push("luke")

//any array

let anyArray: any[] = [23, true, "yes", null]