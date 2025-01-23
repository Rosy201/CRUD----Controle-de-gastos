//impedir que usuarios não logados acessarem a pagina
firebase.auth().onAuthStateChanged(user => {
    if(!user) {
        window.location.href = "../../index.html";
    }
})