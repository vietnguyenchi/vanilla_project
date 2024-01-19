import { render } from "./utilities/common";
import Navigo from 'navigo';
import { HomePage } from "./pages/HomePage";
import login from "./components/login";
import register from "./components/register";
import { Register } from "./pages/Register";
import login from "./components/login";

const app = document.querySelector('#app');

const router = new Navigo('/', { linksSelector: "a" });

router.on('/', () => render(app, HomePage));
router.on('/logIn', () => render(app, logIn), {
    after: () => {
        const btnLogIn = document.getElementById('btnLogIn');
        btnLogIn.addEventListener('click', login);
    }
});
router.on('/register', () => render(app, Register), {
    after: () => {
        const btnRegister = document.getElementById('btnRegister');
        btnRegister.addEventListener('click', register);
    }
});
router.on('/logOut', () => {
    sessionStorage.removeItem('user');
    window.location = '/';
});

router.resolve();