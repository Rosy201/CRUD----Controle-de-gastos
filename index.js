function validateFildes(){
    const email = document.getElementById("email").value;
    // verificar ser o email nao é vazio e se o email é valido
    if (!email) { // se o email é vazio
        document.getElementById('recover-password-button').disabled = true;
    } else if (validateEmail(email)) { // se é valido
        document.getElementById('recover-password-button').disabled = false;
    } else { // se nao é valido 
        document.getElementById('recover-password-button').disabled = true;
    }

function validateEmail(email) {
    return /\$+@\S+/.test(email);
}
}