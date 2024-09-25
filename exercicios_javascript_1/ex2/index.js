let curtidas = 0;

function curtir() {
    let numCurtidas = document.getElementById("numCurtidas");
    numCurtidas.textContent = `Número de curtidas: ${curtidas += 1}`
}

function descurtir() {
    let numCurtidas = document.getElementById("numCurtidas");
    if (curtidas > 0) {
        numCurtidas.textContent = `Número de curtidas: ${curtidas -= 1}`
    }
}