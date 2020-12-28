function adicionar() {
    var todo = document.querySelector("input#todo")
    var lista = document.querySelector("ul#lista")
    lista.style.listStyle = "none"

    var item = document.createElement("li")
    item.innerHTML = todo.value

    var remove = document.createElement("a")
    remove.setAttribute("href", "#")
    remove.innerHTML = "X"

    remove.onclick = () => {
        item.remove()
    }

    lista.appendChild(item)
    item.appendChild(remove)
}