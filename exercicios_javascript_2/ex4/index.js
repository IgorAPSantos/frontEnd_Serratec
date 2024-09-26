let verificarHabilidade = () => {
    // e.preventDefault()
    let habilidades = document.getElementById("habilidades").value
    let txt = document.getElementById("txt")
    let habilidadesArray = habilidades.split(',')
    let possuiJavascript = false;
    for (let habilidade of habilidadesArray) {
        if (habilidade.trim().toLowerCase() === "javascript") {
            possuiJavascript = true
        }
    }
    alert(`Possui javascript: ${possuiJavascript}`)
}