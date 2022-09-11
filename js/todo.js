const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoUl = document.querySelector("#todo");

const TODO_KEY = "todo";
let todos = [];


function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    span.innerText = todo;
    deleteButton.innerText = "❌";
    li.appendChild(span);
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteTodo);
    todoUl.appendChild(li);
}

function handleSubmitTodoList(event) {
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    todos.push(todo);
    paintTodo(todo);
    saveTodo();
}

todoForm.addEventListener("submit", handleSubmitTodoList);

if (localStorage.getItem("username") === null) {
    console.log("로그인이 안되어있음")
    todoForm.classList.add("hidden");
    todoUl.classList.add("hidden");
}

const savedTodos = localStorage.getItem(TODO_KEY);
console.log(savedTodos);
if (savedTodos) {
    todos = JSON.parse(savedTodos);
    todos.forEach(paintTodo);  
}

/* if (localStorage.) {

} */