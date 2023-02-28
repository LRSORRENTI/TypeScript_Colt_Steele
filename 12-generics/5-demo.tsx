// remember in JSX we use angle brackets 
// all the time, and since in TS we also 
// use angle brackets for generics, things 
// can get confusing, so the solution:

function retRandEl<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length)
    return list[randIdx];
}

// So with the above, it knows that the 
// angle brackets are for the TS generic syntax, 
// BUT with arrow functions we add a comma postfix 
// to the initial <T,>

const randEl = <T,>(list: T[]): T => {
    const randIdx = Math.floor(Math.random() * list.length)
    return list[randIdx];
}

// Now we can use that arrow func, and this 
// problem is only inside TSX files, in regular 
// TS you'll use angle brackets for generics but obviously 
// TS + React and TSX it's different