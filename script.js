const adicionaItem = () => {

    const novoItem = document.createElement("article")
    const adicionarItem = document.createTextNode("doloroso")
    novoItem.appendChild(adicionarItem)
    let referItem = document.getElementById("container")
    referItem.insertAdjacentElement("beforeend", novoItem)
    novoItem.setAttribute("class", "item")
    novoItem.setAttribute("onclick", "removeItem(event)")
}

const removeItem = (event) =>{
    const remover = event.target
    remover.parentNode.removeChild(remover)

}

