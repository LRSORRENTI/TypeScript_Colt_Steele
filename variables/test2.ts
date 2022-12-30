function capitalize(str: string):string {
    console.log(str.toUpperCase())
    return str.toUpperCase();
}

capitalize('luke')

const names = ['luke', 'mc', 'angie']
console.log(names)
names.map(name =>{
    console.log(name.toUpperCase())
return name.toUpperCase()
})

console.log(names)


function printTwice(msg: string):void {
    console.log(msg)
    console.log(msg)
}