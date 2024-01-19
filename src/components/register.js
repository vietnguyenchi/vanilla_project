import { validRegister } from "../validations/auth.valid";

const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

function register() {
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let cf_password = document.getElementById('cf_password').value.trim();

    let userInfo = {
        username,
        email,
        password, 
        cf_password
    }

    if (validRegister(userInfo, users)) {
        users.push(userInfo);
        localStorage.setItem("users", JSON.stringify(users));
        sessionStorage.setItem('user', JSON.stringify(userInfo));
        alert('Register successfully');
        window.location = '/';
    }
}

export default register;