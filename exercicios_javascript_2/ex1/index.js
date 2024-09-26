function verificarNota() {
    let nota = document.getElementById("nota").value;

    if (nota >= 6 && nota <= 10) {
        alert("Parabéns!! Você foi Aprovado(a)!!")
    } else if (nota >= 0 && nota <= 6) {
        alert("Infelizmente você foi Reprovado(a)!!")
    } else {
        alert("É necessário informar um valor válido!! (de 0 a 10)")
    }
}
