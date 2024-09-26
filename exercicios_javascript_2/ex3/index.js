window.onload = () => {
    let verificaIdade = () => {
        let idade = prompt("Informe sua idade:")
        if (idade >= 18) {
            resposta.textContent = "acesso liberado"
        } else {
            resposta.textContent = "acesso negado"
        }
    }
    verificaIdade()
}
