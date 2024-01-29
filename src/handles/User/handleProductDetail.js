import instance from "@/apis";

const handleProductDetail = async function (data) {
    const id = data.id;
    const productDetail = document.getElementById('productDetail');
    if (id) {
        instance.get(`products/${id}`).then(({data}) => {
            productDetail.innerHTML = /*html*/`
                <div class="row">
                    <div class="col-lg-6">
                        <img class="border rounded w-100" src="${data.thumbnail}" class="w-100" alt="">
                    </div>
                    <div class="col-lg-6">
                        <div class="content p-2 mb-3">
                            <h1 class="mb-3">${data.title}</h1>
                            <h5 class="mb-3">Price: <span class="text-danger mb-3">$${data.price}</span></h5>
                            <h5 class="mb-3">Brand: <span class="text-info mb-3">${data.brand}</span></h5>
                            <h5 class="mb-3">Rating: <span class="text-warning mb-3">⭐${data.rating}</span></h5>
                            <h5 class="mb-3">In stock: <span class="text-success mb-3">${data.stock}</span></h5>
                            <div class="cta row my-4">
                                <div class="col-md-6">
                                    <button class="btn btn-info w-100 text-light fs-5 fw-bold py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-cards me-2">
                                            <rect width="18" height="18" x="3" y="3" rx="2" />
                                            <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
                                            <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
                                        </svg>
                                        Buy now
                                    </button>
                                </div>
                                <div class="col-md-6">
                                    <button class="btn w-100 border border-2 fs-5 fw-bold py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart me-2">
                                            <circle cx="8" cy="21" r="1" />
                                            <circle cx="19" cy="21" r="1" />
                                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                                        </svg>
                                        Add to cart
                                    </button>                  
                                </div>
                            </div>
                            <h6 class="fw-bold">Product Detail</h6>
                            <p class="mb-3">${data.description}</p>
                        </div>
                    </div>
                </div>
            `
        });
    }
}

export default handleProductDetail;