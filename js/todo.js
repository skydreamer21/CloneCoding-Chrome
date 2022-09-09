const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoUl = document.querySelector("#todo");

function handleSubmitTodoList(event) {
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = todo;
    todoUl.appendChild(li);
}

todoForm.addEventListener("submit", handleSubmitTodoList);