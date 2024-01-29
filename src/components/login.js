import { router } from "@/utilities/common";
import showMessage from "@/utilities/showMessage";
import instance from "@/apis";
import { validLogin } from "@/validations/auth.valid";

// import { router } from '../utilities/router';
const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

function login() {
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    
    if (validLogin(email, password)) {
        instance.post('/login', {email, password})
        .then(({data}) => {
            sessionStorage.setItem('user', JSON.stringify(data.user));
            alert('Login successful');
            router.navigate('/');
        })
        .catch(() => showMessage('error', 'Account not existing'));

    }
    
}

export default login;