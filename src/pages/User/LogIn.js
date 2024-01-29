import { header } from "../../components/header";
export const logIn = () => {
    return /*html*/`
        ${header()}
        <div class="container">
            <form class="border rounded shadow p-5 mx-auto mt-5" style="max-width: 500px;">
                <h2 class="mb-4">Log In</h2>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fw-medium">Email address</label>
                    <input type="email" id="email" class="form-control" placeholder="Your email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label fw-medium">Password</label>
                    <input type="password" id="password" class="form-control" placeholder="Your password">
                </div>
                <div class="mb-4 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label fw-medium" for="exampleCheck1">Remember me</label>
                </div>
                <button type="button" id="btnLogIn" class="btn w-100 text-light custom-bg">Log In</button>
            </form>
        </div>
    `;
}