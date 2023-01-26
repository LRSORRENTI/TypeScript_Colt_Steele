// Literal types aren't just types, they themselves are values too!

// ex function w/ literal type param

const returnAnswer = (answer: 'yes' | 'no' | 'maybe') => {
    return `The answer is ${answer}`
}

// can also privide one of the literal types as argument: 

returnAnswer('no')

returnAnswer('maybe')

// can't pass in any arguments that aren't specified: 

returnAnswer{'idk'}

let ageInYear2023: 30 = 30;

ageInYear2023 = 29

let hi: 'hi'

hi = 'yo'

let mood: 'happy' | 'sad' | 'eh' = 'eh'

mood = 'happy'

mood = 'upset'

type Cat = 'scottish fold' | 'maine coon' | 'birman' | 'chartreux';

let currentCat: Cat = 'birman'

currentCat = 'maine coon'

currentCat = 'bengal'