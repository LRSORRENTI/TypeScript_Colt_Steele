function square(num: number){
    return num * num;
}
square(30)


function myFunction(param1: string, param2: number): string | number{
    return (param1.toUpperCase(), param2 * 2)
}
function greet(person: string = "John doe"): string{
    return `hi there ${person}`
}
const funcColors = ["Red", "Green"]
funcColors.map((color: string): string => {
    return color.toUpperCase()
})

function printTwice(msg: string): void {
    console.log(msg)
    console.log(msg)
}



