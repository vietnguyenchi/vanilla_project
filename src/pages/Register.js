import { header } from "../components/header";
export const Register = () => {
    return `
        ${header()}
        <div class="container">
            <form class="border rounded shadow p-5 mx-auto mt-5" style="max-width: 500px;">
                <h2 class="mb-4">Register</h2>
                <div class="mb-3">
                    <label class="form-label fw-medium">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Username">
                </div>
                <div class="mb-3">
                    <label class="form-label fw-medium">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Your email">
                </div>
                <div class="mb-3">
                    <label class="form-label fw-medium">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Your password">
                </div>
                <div class="mb-3">
                    <label class="form-label fw-medium">Confirm password</label>
                    <input type="password" class="form-control" id="cf_password" placeholder="Confirm password">
                </div>
                <button type="button" id="btnRegister" class="btn w-100 text-light custom-bg">Register</button>
            </form>
        </div>
    `;
}
