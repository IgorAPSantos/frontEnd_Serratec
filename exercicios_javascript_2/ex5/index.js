function adicionarItem() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();

    if (itemText !== "") {
        const listaDeCompras = document.getElementById("listaDeCompras");
        const novoItem = document.createElement("li");
        novoItem.textContent = itemText;

        listaDeCompras.appendChild(novoItem);
        itemInput.value = "";
    }
}