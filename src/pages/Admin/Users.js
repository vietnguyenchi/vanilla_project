import { headerAdmin } from "@/components/headerAdmin";
const Users = () => {
    return /*html*/ `
        ${headerAdmin()}
        <div class="container-fluid" id="main-content">
            <div class="row">
                <div class="col-lg-10 ms-auto p-4 overflow-hiddens">
                    <h3 class="mb-4">USERS</h3>

                    <div class="card border-0 shadow-sm sm-4">
                        <div class="card-body">
                            <div class="table-responsive-md" style="height: 500px; overflow-y: scroll;">
                                <table class="table table-hover border table-bordered">
                                    <thead class="sticky-top">
                                        <tr>
                                            <th class="bg-dark text-white" scope="col" width="5%">#</th>
                                            <th class="bg-dark text-white" scope="col">Username</th>
                                            <th class="bg-dark text-white" scope="col">Email</th>
                                            <th class="bg-dark text-white" scope="col">Phone</th>
                                            <th class="bg-dark text-white" scope="col">Address</th>
                                            <th class="bg-dark text-white" scope="col">Role</th>
                                            <th class="bg-dark text-white" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="usersList">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;
};

export default Users;