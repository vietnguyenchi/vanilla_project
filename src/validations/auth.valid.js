function validRegister(data, users) {
    if (data.username === '' || data.email === '' || data.password === '' || data.cf_password === '') {
        alert('Cannot be empty');
        return false;
    } 

    if (data.password.length < 6) {
        alert('Password must be at least 6 characters')
        return false;
    }

    if (data.password !== data.cf_password) {
        alert('Confirm password not correct');
        return false;
    }

    for (const user of users) {
        if (user.email === data.email) {
            alert('Email already in use');
            return false;
        }
    }

    return true;
}

function validLogin(email, password, users) {
    if (email === '' || password === '') {
        alert('Cannot be empty');
        return false;
    }

    const result = users.some(user => user.email === email && user.password === password)

    if (result === false) {
        alert('Invalid email or password');
        return false;
    }

    return true;
}

export {validRegister, validLogin};