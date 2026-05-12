let user = "mateusvaranda@gmail.com";
let password = "123456";

function login(event) {

    event.preventDefault();

    let inputUser = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;

    if (inputUser === user && inputPassword === password) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}

document.getElementById("loginForm").addEventListener("submit", login);

