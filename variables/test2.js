function capitalize(str) {
    console.log(str.toUpperCase());
    return str.toUpperCase();
}
capitalize('luke');
var names = ['luke', 'mc', 'angie'];
console.log(names);
names.map(function (name) {
    console.log(name.toUpperCase());
    return name.toUpperCase();
});
console.log(names);
