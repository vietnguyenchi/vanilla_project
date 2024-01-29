import instance from "@/apis";

const handleProductsListAdmin = () => {
    const productsList = document.querySelector('#productsList');

    instance.get('/products').then(({data}) => {
        const contentHTML = data.map((product, i) => {
            return /*html*/ `
            <tr class="align-middle">
                <td class="text-center">${i + 1}</td>
                <td>${product.title}</td>
                <td>$${product.price}</td>
                <td>
                    <div style="max-height: 100px; overflow: hidden;">
                        <img src="${product.thumbnail}" width="100" alt="">
                    </div>
                </td>
                <td>${product.category}</td>
                <td>${product.discountPercentage}%</td>
                <td>${product.stock}</td>
                <td>
                    <button class="btn btn-info btn-sm shadow-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                    </button>
                    <button class="btn btn-success btn-sm shadow-none" data-bs-toggle="modal" data-bs-target="#update_product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                            <path d="m15 5 4 4" />
                        </svg>
                    </button>
                    <a href="#" class="btn btn-danger btn-sm shadow-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                    </a>
                </td>
            </tr>
            `
        }).join('');
        productsList.innerHTML = contentHTML;
    })

} 

export default handleProductsListAdmin;