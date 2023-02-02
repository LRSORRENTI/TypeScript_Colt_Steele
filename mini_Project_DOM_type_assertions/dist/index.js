"use strict";
// console.log('hi there!!!!')
// console.log('changed')
// console.log('watch!!!')
// console.log('auto update in js?')
// console.log('browswe sync updating?')
// console.log("live server?")
const todos = [];
const btn = document.getElementById('btn');
const input = document.getElementById("todo");
// above we need to cast it using the 'as' keyword
const form = document.getElementById("form");
const uL = document.getElementById("todolist");
function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodoElement(newTodo);
    todos.push(newTodo);
    // the above is just in memory, a small data structure, 
    //below is what's viewed  on the page
    input.value = "";
}
function createTodoElement(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(todo.text);
    // the .text is from the interface defined above
    newLi.append(checkbox);
    uL.append(newLi);
}
form.addEventListener("submit", handleSubmit);
// TS infers that the event param is of type SubmitEvent
// console.log(btn)
// btn?.addEventListener("click", function(){
//     alert(input.value)
//     input.value = ""
// })
