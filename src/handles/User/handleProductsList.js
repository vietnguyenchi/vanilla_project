import instance from "@/apis";

const handleProducstList = async () => {
    const productsList = document.querySelector('#productsList');

    try {
        const { data } = await instance.get(`/products`);

        if (data) {
            const contentHTML = data.map(product => {
                return /*html*/`
                <div class="col-lg-3 mb-5">
                    <div class="card shadow rounded">
                    <img class="rounded" src="${product.thumbnail}" height="200" alt="">
                        <div class="content p-2">
                            <h5 class="text-primary mb-2">${product.title}</h5>
                            <h6>Price: <span class="text-danger mb-2">$${product.price}</span></h6>
                            <h6>Brand: <span class="text-info mb-2">${product.brand}</span></h6>
                            <h6>Rating: <span class="text-warning mb-2">${product.rating}⭐</span></h6>
                            <h6>In stock: <span class="text-success mb-2">${product.stock}</span></h6>
                            <p class="mb-2">${product.description}</p>
                            <a href="#" class="btn btn-primary w-100 mb-2 d-flex align-items-center justify-content-center fw-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart me-2">
                                    <circle cx="8" cy="21" r="1" />
                                    <circle cx="19" cy="21" r="1" />
                                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                                </svg>
                                Add to cart
                            </a>
                            <a href="/detail/${product.id}" class="btn btn-info text-light w-100 fw-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-search me-1">
                                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                                <circle cx="12" cy="12" r="3" />
                                <path d="m16 16-1.9-1.9" />
                            </svg>
                                View detail
                            </a>
                        </div>
                    </div>
                </div>
                `
            }).join('');
            productsList.innerHTML = contentHTML;
        }
    } catch (e) {
        console.log(e);
    }
}

export default handleProducstList;