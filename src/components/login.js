import { validLogin } from "../validations/auth.valid";
const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

function login() {
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if (validLogin(email, password, users)) {
        const user = users.find(user => user.email === email && password === password);
        sessionStorage.setItem('user', JSON.stringify(user));
        alert('Login successful');
        window.location = '/';
    }
}

export default login;