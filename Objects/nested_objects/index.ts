// a function with a nested object type parameter

const describeDog = (dog: {
    name: string;
    age: number;
    breedNames: {
        motherBreed: string;
        fatherBreed: string;
    }
}) => {
    return `Dog: ${dog.name}, 
    Age: ${dog.age},
    parents: ${dog.breedNames.motherBreed}, 
    ${dog.breedNames.fatherBreed}`;

}

describeDog({name: 'Maggie', age: 2, breedNames: {
    motherBreed: 'Corgi', 
    fatherBreed: 'Cavalier King Charles Spaniel'
}});



// let's instad save some of this to a 
//type using the type keyword

type Song =  {
    title: string, 
artist: string, 
numberOfPlays: number,
credits: {
    producer: string,
    writer: string
}
}

// this is the function that will expeect 
// an object to be passed in to calc payout



// Also expects object to be passed in


const mySong: Song = {
    title: "Folsom Prison Blues",
    artist: "Johnny Cash", 
    numberOfPlays: 1212345,
    credits: {
        producer: "Sam Phillips", 
        writer:  "Johnny Cash"
    }
}


function printSong(song: Song): void {
    console.log(`${song.title}, ${song.artist}`)
    }
    


function calculatePayout(songName: Song): number{
    return songName.numberOfPlays * 0.0033
   }

const earnings = calculatePayout(mySong);

console.log(earnings)

printSong(mySong)