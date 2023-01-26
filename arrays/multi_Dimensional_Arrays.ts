// One thing that happens often is multi-dimensional arrays



const board: string[] = [["x", "o", "x"], ["x", "o", "x"],
["x", "o", "x"]]

//the above doesn't work, since it's an array of arrays,
// to fix this we add another pair of array brackets, 
// this tells TS we want a two-dimensional array type

const boardTwo: string[][] = [["x", "o", "x"], ["x", "o", "x"],
["x", "o", "x"]]

// Also three-dimensional structures is another set of brackets: 

const boardThree: string[][][] = [[["x", "o", "x"], ["x", "o", "x"],
["x", "o", "x"]]]