module.exports.validateRegisterInput = (username, email, password, confirmPassword) => {
    const errors = {};
    if (username.trim() === '') {
        errors.username = 'Forgot username?';
    }
    if (email.trim() === '') {
        errors.email = 'Forgot your email!';
    }
    else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!email.match(regEx)) {
            errors.email = `Wrong email typo`;
        }
    }
    if (password === '') {
        errors.password = 'Atlest one character required';
    }
    else if (password !== confirmPassword) {
        errors.confirmPassword = 'Try again wrong password';
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1,
    };
};

module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if (username.trim === '') {
        errors.username = 'Seems like you forgot a username';
    }
    if (password.trim() === '') {
        errors.password = 'You forgot password';
    }
    return {
        errors, valid: Object.keys(errors).length < 1,
    };
};