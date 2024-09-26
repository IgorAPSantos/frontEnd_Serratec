let isNumPar = () => {
    let numero = parseFloat(document.getElementById("numero").value)
    let resposta = document.getElementById("resposta")

    if (!numero) {
        resposta.textContent = ""
    } else if (numero % 2 === 0) {
        resposta.textContent = `${numero} é par! `
    } else {
        resposta.textContent = `${numero} é ímpar!`
    }
}