// UNION TYPES ALLOW VALUES TO HAVE DIFFERENT POSSIBLE TYPES 

// WE CREATE A UNION TYPE WITH THE PIPE CHARACTER '|' 

// WHICH ESSENTIALLY TELLS TS "THIS CAN BE STRING OR NUMBER"
// OR WHICHEVER DATA TYPES

const guessAge = (age: number | string) => {
    return `Your age is ${age}`
}

guessAge(20)
guessAge("twenty")

// Can pass in num or string above

guessAge(true)

//cannot pass in boolean

guessAge({ age: 44 })

// cannot pass in anything else
