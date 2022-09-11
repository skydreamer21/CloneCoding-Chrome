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
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveTodo();
}

function paintTodo(todoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    span.innerText = todoObj.todo;
    deleteButton.innerText = "❌";
    li.id = todoObj.id;
    li.appendChild(span);
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteTodo);
    todoUl.appendChild(li);
}

function handleSubmitTodoList(event) {
    event.preventDefault();
    const todoObj = {
        todo: todoInput.value,
        id: Date.now()
    }
    todoInput.value = "";
    todos.push(todoObj);
    paintTodo(todoObj);
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