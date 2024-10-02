//validação dos campos
function validateFildes(){
    toggleButtonDisable();
    toggleEmailErrors();
}

function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}
// alternar entre duas opções a parte do email(tipo interrupior liga/desliga)
function toggleEmailErrors() {
    const email = document.getElementById("email").value;
    if (!email) {
        document.getElementById('email-required-error').style.display = "block";
    } else {
        document.getElementById('email-required-error').style.display = "none";

    }

    if(validateEmail(email)) {
        document.getElementById('email-invalid-error').style.display = "none";
    } else {
        document.getElementById('email-invalid-error').style.display = "block";

    }
}

 

function toggleButtonDisable() {
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled = !emailValid;
    
    const passwordValid = isPasswordValid();
    document.getElementById('login-butto').disabled = !emailValid || !isPasswordValid;
}

function isPasswordValid() {
    const password = document.getElementById("password").value;
    if (!password) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\$+@\S+/.test(email);
}