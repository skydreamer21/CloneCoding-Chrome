const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");


function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.add("appear");

}

loginForm.addEventListener("submit", onLoginSubmit);