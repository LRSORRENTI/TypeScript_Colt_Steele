"use strict";
// console.log('hi there!!!!')
// console.log('changed')
// console.log('watch!!!')
// console.log('auto update in js?')
// console.log('browswe sync updating?')
// console.log("live server?")
const btn = document.getElementById('btn');
const input = document.getElementById("todo");
// above we need to cast it using the 'as' keyword
const form = document.getElementById("form");
const uL = document.getElementById("todolist");
function handleSubmit(event) {
    event.preventDefault();
    const newTodoItem = input.value;
    const newLi = document.createElement("li");
    newLi.append(newTodoItem);
    uL.append(newLi);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// TS infers that the event param is of type SubmitEvent
// console.log(btn)
// btn?.addEventListener("click", function(){
//     alert(input.value)
//     input.value = ""
// })
