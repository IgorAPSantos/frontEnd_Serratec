function mudaBotao() {
    let botao = document.getElementById("botao");

    if (botao.textContent.includes("Clique")) {
        botao.textContent = "Obrigado por clicar!";
    }
    else if (botao.textContent.includes("clicar")) {
        botao.textContent = "Clique aqui!";
    }
}