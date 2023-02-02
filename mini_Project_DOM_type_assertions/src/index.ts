// console.log('hi there!!!!')
// console.log('changed')
// console.log('watch!!!')
// console.log('auto update in js?')
// console.log('browswe sync updating?')
// console.log("live server?")

const btn = document.getElementById('btn')! as HTMLButtonElement;

const input = document.getElementById("todo")! as HTMLInputElement;

// above we need to cast it using the 'as' keyword
const form = document.getElementById("form")! as HTMLFormElement;

form.addEventListener("submit", function(event){
event.preventDefault();
    console.log("submitted")
})

// TS infers that the event param is of type SubmitEvent

// console.log(btn)

btn?.addEventListener("click", function(){
    alert(input.value)
    input.value = ""
})

