const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");


function onLoginSubmit(event) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);