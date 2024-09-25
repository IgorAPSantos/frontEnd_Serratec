let i = 1;
function novoParagrafo() {
    var paragrafo = document.getElementById("paragrafo");

    paragrafo.textContent = `${i += 1}° parágrafo`;
}