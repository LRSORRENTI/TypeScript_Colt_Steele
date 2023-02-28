// Another thing we can do is restrain or restrict 
// the possible allowed types for a type parameter

// To do this we utilize the extends keyword plus 
// the object keyword

// This way the type passed in must always be 
// an object, doesn't matter what the contents 
// of the object are, they just need to 
// be objects passed in


function finalMerge<T extends object, U extends object>
(obj1: T, obj2: U){
  return{
    ...obj1,
    ...obj2
  }
}

// Let's look at another ex, this time with 
// an interface

interface Weather {
    degrees: number;
}

function displayTemp<T extends Weather>(arg1: T){
    console.log(arg1.degrees);
    return arg1.degrees;
}

// The main takeaway is that we can use type aliases, 
// and interfaces to implement type constraints