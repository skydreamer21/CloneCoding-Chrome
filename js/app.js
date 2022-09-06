const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.add("appear");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    // show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}

 

