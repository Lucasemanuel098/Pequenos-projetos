let lista = []

function adicionar() {
    let input = document.getElementById("input").value
    number = Number(input)
    
    lista.push(number)
    console.log(lista)
    mostrarlista()
    media()
}
function media(){
    let soma = 0
    let res = document.getElementById(`res`)
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
    }
    let media = soma/lista.length
    console.log(media)
    res.innerHTML = media

}

function mostrarlista() {
    let ul = document.getElementById("lista")
    ul.innerHTML = ``
    for (let i = 0; i < lista.length; i++) {
        ul.innerHTML += `<li>${lista[i]}</li>`
        console.log(lista)
    }
}

