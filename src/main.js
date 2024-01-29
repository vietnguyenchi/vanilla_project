import { render } from "./utilities/common";
import { router } from "./utilities/common";
import { HomePage } from "./pages/User/HomePage";
import login from "./components/login";
import { logIn } from "./pages/User/LogIn";
import register from "./components/register";
import { Register } from "./pages/User/Register";
import { NotFoundPage } from "./pages/User/NotFoundPage";
import { ProductDetail } from "./pages/User/ProductDetail";
import handleProductsList from "./handles/User/handleProductsList";
import handleProductDetail from "./handles/User/handleProductDetail";
import setActive from "./components/setActive";
import { Admin } from "./pages/Admin/Admin";
import Products from "./pages/Admin/Products";
import Users from "./pages/Admin/Users";
import handleProductsAdmin from "./handles/Admin/handleProductsAdmin";
import handleUsers from "./handles/Admin/handleUsers";
import Profile from "./pages/User/Profile";
import Categories from "./pages/Admin/Categories";
import { addCategory, delete_cat, handleCategories, renderCat } from "./handles/Admin/handleCategories";

const app = document.querySelector('#app');
const user = JSON.parse(sessionStorage.getItem('user'));

router.on('/', () => render(app, HomePage), {
    after() {
        handleProductsList();
    }
});

router.on('/detail/:id', () => render(app, ProductDetail), {
    after({ data }) {
        handleProductDetail(data);
    }
});

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

router.on('/profile', () => render(app, Profile));

router.on('/logOut', () => {
    sessionStorage.removeItem('user');
    window.location = '/';
});

// Admin
router.on("/admin", () => render(app, Admin), {
    before(done) {
        if (user.role !== 'admin') {
            alert('You not allowed');
            router.navigate('/');
        }
        done();
    },
    after() {
        setActive();
    }
});

router.on('/admin/products', () => render(app, Products), {
    before(done) {
        if (user.role !== 'admin') {
            alert('You not allowed');
            router.navigate('/');
        }
        done();
        setActive();
    },
    after() {
        handleProductsAdmin();
        renderCat();
    }
});

router.on('/admin/users', () => render(app, Users), {
    before(done) {
        if (user.role !== 'admin') {
            alert('You not allowed');
            router.navigate('/');
        }
        done();
        setActive();
    },
    after() {
        handleUsers();
    }
});

router.on('admin/categories', () => render(app, Categories), {
    before(done) {
        if (user.role !== 'admin') {
            alert('You not allowed');
            router.navigate('/');
        }
        done();
        setActive();
    }, 
    after() {
        handleCategories();
        document.getElementById('add_category').addEventListener('submit', (e) => {
            e.preventDefault();
            addCategory();
        })
    }
});

router.on('/admin/categories/delete_cat/:id', () => render(app, Categories),{
    after({data}) {
        delete_cat(data.id);
        handleCategories();
    }
})

router.on('/admin/dashboard', () => router.navigate('/admin'));
router.notFound(() => render(app, NotFoundPage));

router.resolve();