import instance from "@/apis";
{/* <img src="${user.avatar}" width="50" alt=""> */}
const handleUsers = () => {
    const usersList = document.querySelector('#usersList');

    instance.get('/users').then(({data}) => {
        const contentHTML = data.map((user, i) => {
            return /*html*/ `
                <tr>
                    <td>${i + 1}</td>
                    <td>
                        <div style="width: fit-content" class="d-flex flex-column align-items-center fw-medium">
                            ${user.username}
                        </div>
                    </td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.address}</td>
                    <td>${user.role}</td>
                    <td>
                        <button class="btn btn-success btn-sm shadow-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil">
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                <path d="m15 5 4 4" />
                            </svg>
                        </button>
                    </td>
                </tr>
            `
        }).join('');
        usersList.innerHTML = contentHTML;
    });
}

export default handleUsers;