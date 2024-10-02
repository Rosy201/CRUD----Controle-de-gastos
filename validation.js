function validateEmail(email) {
    return /\$+@\S+/.test(email);
}