// Remember from earlier, we selected the class btn 
// from our html page, and the default element before
// we set it to HTMLButtonElement, was just Element

// We can create our own generic function that 
// has a default value for a type param:

function makeEmptyArray<T>(): T[]{
   return []
}

// const strings = makeEmptyArray<string>();

// strings.push("luke")

// so the above works, but if we omit the 
// <string> we get the following default 
// return type: unknown

const newStrings = makeEmptyArray();

// But if we altered the function declaration: 

function makeEmptyArrayTwo<T = number>(): T[]{
    return [];
}

const stringz = makeEmptyArrayTwo();

// Now if we hover over stringz, we don't see 
// unknown, we see number as the default type

const bools = makeEmptyArrayTwo<boolean>();

// same thing with other datatypes like above