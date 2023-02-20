// Next we have another way to narrow a type before 
// using it, this is equality narrowing 

// equality type guards involve comparing types 
// to each other before doing certain operations 
// with values 

// by checking two values against each other,
// we can be sure they're of the same type before 
// working with them in a type specific way

// things like '===' or '!=' 

function someDemo(x: string | number, 
                   y: string | boolean) {
        if (x === y ){
            x 
            y 
            // if at this point we hover over 
            // x and y, they are both of 
            // type string, since the only 
            // way we made it past that === 
            // equality check is if x is 
            // a num and not a string, 
            // and y is a string and not a boolean
            // if either were not a string, 
            // the === check would've caught it
        }
    }

    // keep in mind, if we used == instead of 
    // ===, type conversion would've occured, now 
    // unless that's something we want, which in 
    // this case it isn't , === will do the hard work 
    // to make sure that the values are what we 
    // want before using them, where == is 
    // more dangerous