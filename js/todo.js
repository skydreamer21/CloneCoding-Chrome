const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoUl = document.querySelector("#todo");

const todos = [];

function saveTodo() {
    localStorage.setItem("todo", JSON.stringify(todos));
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