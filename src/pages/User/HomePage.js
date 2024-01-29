import { header } from "../../components/header";

export const HomePage = () => {
    return /*html*/`
        ${header()}
        <div id="productsList" class="container row mx-auto p-0"></div>
    `;
}