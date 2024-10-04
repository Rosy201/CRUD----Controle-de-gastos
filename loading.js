function showLoading() {

    //createElement pode pegar qualquer tag do html e usar no js
    const div = document.createElement("div");

    // classlist é classes da lsita do document html para colocar
    div.classList.add("loading", "centralize");
    
    const label = document.createElement("label");
    label.innerText = "Carregando...";

    div.appendChild(label);

    // o elemento div será inserido dentro do <body> da página.
    document.body.appendChild(div);
}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length) {
        loadings[0].remove();
    }
}