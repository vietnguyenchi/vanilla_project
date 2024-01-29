import instance from "@/apis";
import { validRegister } from "../validations/auth.valid";
import showMessage from "@/utilities/showMessage";
import { router } from "@/utilities/common";

function register() {
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let cf_password = document.getElementById('cf_password').value.trim();

    let userInfo = {
        username,
        email,
        password,
        address: '',
        phone: '',
        avatar: './src/images/user.png',
        cart: [],
        role: 'user'
    }

    if (validRegister({email, password, cf_password})) {
        instance.post('/register', userInfo)
            .then(({data}) => {
                sessionStorage.setItem('user', JSON.stringify(data.user));
                alert('User registration successful');
                router.navigate('/');
            })
            .catch(({response}) => showMessage('response', response.data));
    }
}

export default register;