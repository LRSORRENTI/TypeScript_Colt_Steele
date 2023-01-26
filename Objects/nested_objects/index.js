// a function with a nested object parameter
var describeDog = function (dog) {
    return "Dog: ".concat(name, ", \n    Age: ").concat(age, ",\n    parents: ").concat(breedNames.motherBreed, ", \n    ").concat(breedNames.fatherBreed);
};
describeDog({ name: 'Maggie', age: 2, breedNames: {
        motherBreed: 'Corgi',
        fatherBreed: 'Cavalier King Charles Spaniel'
    } });
// this is the function that will expeect 
// an object to be passed in to calc payout
function calculatePayout(songName) {
    return songName.numberOfPlays * 0.0033;
}
// Also expects object to be passed in
function printSong(song) {
    console.log("".concat(song.title, ", ").concat(song.artist));
}
var mySong = {
    title: "Folsom Prison Blues",
    artist: "Johnny Cash",
    numberOfPlays: 1212345,
    credits: {
        producer: "Sam Phillips",
        writer: "Johnny Cash"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
