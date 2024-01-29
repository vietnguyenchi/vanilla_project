import { header } from "@/components/header";

const Profile = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return /*html*/`
    ${header()}
    <div class="container">
        <div class="row">

            <div class="col-12 my-5 px-4">
                <h2 class="fw-bold">PROFILE</h2>
                <div style="font-size: 14px;">
                    <a href="/" class="text-decondary text-decoration-none">HOME</a>
                    <span class="text-secondary"> > </span>
                    <a href="#" class="text-secondary text-decoration-none">PROFILE</a>
                </div>
            </div>

            <div class="col-12 mb-5 px-4">
                <div class="bg-white p-3 p-md-4 rounded shadow-sm">
                    <form method="POST">
                        <h5 class="mb-3 fw-bold">Basic Information</h5>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Username</label>
                                <input type="text" name="name" value="${user.username}"
                                    class="form-control shadow-none">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Phone number</label>
                                <input type="text" name="phone" value="${user.phone}"
                                    class="form-control shadow-none">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" name="email" value="${user.email}"
                                    class="form-control shadow-none" />
                            </div>
                            <div class="col-md-6 mb-4">
                                <label class="form-label">Address</label>
                                <textarea name="address" class="form-control shadow-none"
                                    rows="1">${user.address}</textarea>
                            </div>
                        </div>
                        <button type="submit" name="update_info" class="btn text-white custom-bg shadow-none">Save
                            Changes</button>
                    </form>
                </div>
            </div>

            <div class="col-md-4 mb-5 px-4">
                <div class="bg-white p-3 p-md-4 rounded shadow-sm">
                    <form method="POST" enctype="multipart/form-data">
                        <h5 class="mb-3 fw-bold">Avatar</h5>
                        <img src="${user.avatar}" width="150"
                            class="rounded-circle border border-2 border-secondary img-fluid mb-3">
                        <div>
                            <label class="form-label">New Avatar</label>
                            <input type="file" name="avatar_update" class="mb-4 form-control shadow-none" />
                            <input type="hidden" value="" name="avatar_current">
                        </div>

                        <button type="submit" name="update_ava" class="btn text-white custom-bg shadow-none">Save
                            Changes</button>
                    </form>
                </div>
            </div>

            <div class="col-md-8 mb-5 px-4">
                <div class="bg-white p-3 p-md-4 rounded shadow-sm">
                    <form method="POST">
                        <h5 class="mb-3 fw-bold">Change Password</h5>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">New Password</label>
                                <input type="password" name="new_password" class="form-control shadow-none">
                                <input type="hidden" name="user_id" value="">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Confirm Password</label>
                                <input name="confirm_password" type="password" class="form-control shadow-none">
                            </div>
                        </div>
                        <button type="submit" name="update_pass" class="btn text-white custom-bg shadow-none">Save
                            Changes</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
    `
}

export default Profile;