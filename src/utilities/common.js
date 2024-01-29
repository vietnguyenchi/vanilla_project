import Navigo from 'navigo';
const router = new Navigo('/', { linksSelector: "a", hash: true });

const render = (target, content) => {
    target.innerHTML = content();
};


const checkLogin = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    // console.log(user);
    // <img src="${user.avatar}" width="30" class="rounded-circle border border-secondary border-2 me-1">
    if (user) {
        return /*html*/`
        <div class="dropdown">
            <button class="btn border dropdown-toggle border border-primary-subtle border-2" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                ${user.username}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li>
                    <a class="dropdown-item" href="/profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-sliders me-1">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                            <path d="M8 12h8" />
                            <path d="M10 11v2" />
                            <path d="M8 17h8" />
                            <path d="M14 16v2" />
                        </svg>
                        Profile
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart me-1">
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                        Cart
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="/logOut">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out me-1">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" x2="9" y1="12" y2="12" />
                    </svg>
                        Log out
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="/admin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-cog me-1">
                            <circle cx="18" cy="15" r="3" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                            <path d="m21.7 16.4-.9-.3" />
                            <path d="m15.2 13.9-.9-.3" />
                            <path d="m16.6 18.7.3-.9" />
                            <path d="m19.1 12.2.3-.9" />
                            <path d="m19.6 18.7-.4-1" />
                            <path d="m16.8 12.3-.4-1" />
                            <path d="m14.3 16.6 1-.4" />
                            <path d="m20.7 13.8 1-.4" />
                        </svg>
                        Admin
                    </a>
                </li>
            </ul>
        </div>
        `;
    }
    return /*html*/`
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="btn custom-bg text-light fw-medium" aria-current="page" href="/logIn">
                    Log In
                </a>
            </li>
            <li class="nav-item">
                <a class="btn border border-2 fw-medium ms-2" aria-current="page" href="/register">Sign Up</a>
            </li>
        </ul>
    `;
}

export { render, router, checkLogin};