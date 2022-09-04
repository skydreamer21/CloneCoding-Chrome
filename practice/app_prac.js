const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() { //onLoginBtnClick 도 괜찮
    const username = loginInput.value;
    
    /* 
    // html 
    if (username == "") {
        alert("Please write your name!");
    } else if (username.length >= 15) {
        alert("username should be less than 15 characters");
        loginInput.value = "";
    }
    else alert(username + " login!"); 
    */
     
    alert(username + " login!");
}

loginButton.addEventListener("click", handleLoginBtnClick);

// 브라우저가 새로고침하지 않고 user 정보를 저장하도록
