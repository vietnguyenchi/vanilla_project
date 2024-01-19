const render = (target, content) => {
    target.innerHTML = content();
};

const checkLogin = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
        return `
        <div class="dropdown">
            <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <img src="./public/images/user.png" width="28"
                    class="rounded-circle border border-secondary border-2 me-1">
                ${user.username}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><a class="dropdown-item" href="/logOut">Log out</a></li>
            </ul>
        </div>
        `;
    }
    return `
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="btn custom-bg text-light" aria-current="page" href="/logIn">Log In</a>
            </li>
            <li class="nav-item">
                <a class="btn custom-bg text-light ms-2" aria-current="page" href="/register">Sign Up</a>
            </li>
        </ul>
    `;
}

export { render, checkLogin};