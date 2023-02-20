// What are intersection types? 

// They are types that are combined using 
 // an "&" ampersand

 type Circle = {
    radius: number;
 }

 type Colorful = {
    color: string;
 }

 type ColorCircle = Circle & Colorful;

 const smileyFace: ColorCircle = {
    radius: 4, 
    color: "yellow"
    }


// Now if we needed to add an aditional value, we 
// use '&' again postfixed to the new type, see CatDog below

    type Cat = {
        numLives: number;
    }

    type Dog = {
        breed: string;
    }



    type CatDog = Cat & Dog & {
        age: number
    };

    const nickelodeanShow: CatDog = {
        numLives: 7,
        breed: "Spaniel",
        age: 5
    }

    // Above we made a new type CatDog
    // then used 2 '&' and {} to add an 
    // additional key value pair 
    // 'age: number' then 
    // created a new variable with that 
    // type including all three key 
    // value pairs