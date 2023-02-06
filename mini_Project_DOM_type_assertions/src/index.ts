// console.log('hi there!!!!')
// console.log('changed')
// console.log('watch!!!')
// console.log('auto update in js?')
// console.log('browswe sync updating?')
// console.log("live server?")


interface Todo {
    text: string;
    completed: boolean;
}


const btn = document.getElementById('btn')! as HTMLButtonElement;

const input = document.getElementById("todo")! as HTMLInputElement;

// above we need to cast it using the 'as' keyword
const form = document.getElementById("form")! as HTMLFormElement;

const uL = document.getElementById("todolist")!

const todos: Todo[] = readTodos();

todos.forEach(createTodoElement);

function readTodos(): Todo[]{
    const todoJSON = localStorage.getItem("todos")
    if(todoJSON === null){
     return [];
    } else{
     return JSON.parse(todoJSON)
    }

}

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos))
}

function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    };
    createTodoElement(newTodo);
    todos.push(newTodo);

    // the above is just in memory, a small data structure, 
    //below is what's viewed  on the page
saveTodos();

    input.value = "";
}

function createTodoElement(todo: Todo){
    
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function(){
       todo.completed = checkbox.checked;
       saveTodos()
        console.log("clicked")
    })
    newLi.append(todo.text);
    // the .text is from the interface defined above
    newLi.append(checkbox);
    
    uL.append(newLi)
}

form.addEventListener("submit", handleSubmit)

// TS infers that the event param is of type SubmitEvent

// console.log(btn)

// btn?.addEventListener("click", function(){
//     alert(input.value)
//     input.value = ""
// })

