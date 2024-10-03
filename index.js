//habilitação dos campos
function onChangeEmail() {
    toggleButtonDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    togglePasswordErrors();
    toggleButtonDisable();
}

//navegar entre tela de login para home
function login() {

    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "pages/home/home.html"
    }).catch(error => {
        alert(getErrorMessage(error));
    });   
}

function getErrorMessage(error) {
    if (error.code == "auth/invalid-credential") {
        return "Usuário não encontrado";
    }
    return error.message;
}

//navegar entre tela de login para registrar
function register() {
    window.location.href = "pages/register/register.html";
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}
// alternar entre duas opções a parte do email(tipo interrupior liga/desliga)
function toggleEmailErrors() {
    const email = form.email().value;

    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonDisable() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
   
    form.recoverPassword().disabled = !emailValid;
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

//encapsular os elementos no objeto form 
const form = {

    // usa arrow function para acessar todos os parametros passados
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById('password'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    recoverPassword: () => document.getElementById('recover-password-button')
}
