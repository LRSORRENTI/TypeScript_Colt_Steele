let mystery = "hello world"

// the above TS infers mystery is a string, but we 
// can override this with: 

let newMystery: unknown = "hi"

const numChars = (newMystery as string).length

// newMystery is still type unknown, but with the 
// as keyword, we tell TS, in this specific 
// instance treat newMystery as if it is a string

// But if newMystery is a num, or any other data type, 
// problems happen. This example doesn't seem to be the 
// best but it's important to know the concept itself, 
// type assertions tell TS to treat something AS a 
// certain type

const numberOfChars = mystery.length