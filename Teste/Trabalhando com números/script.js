let lista = []

function bloquearnumeros() {
    return block = true
}

function adicionar() {
    let input = document.getElementById(`item`)
    let item = Number(input.value)
    if(lista.includes(item) || item === `` || isNaN(item) === true){
        window.alert(`Item invalido ou já adicionado`)
    } else {
      lista.push(item)
      mostrarlista()  
    }
    let maior = lista[0]
    let menor = lista[0]
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
        if (lista[i] < menor) {
            menor = lista[i]
        }
    }
    let cont = document.getElementById(`cont`)
    let bigger = document.getElementById(`maior`)
    let smaller = document.getElementById(`menor`)
    cont.innerHTML = `Quantidade de itens: ${lista.length}`
    bigger.innerHTML = `Maior Número: ${maior}`
    smaller.innerHTML = `Menor Número: ${menor}`
    input.value = ``
    input.focus()
}
function apagar(){
    lista.pop()
    console.log(lista)
    mostrarlista()
    cont.innerHTML = lista.length 
}
function apagarprimeiro(){
    lista.shift()
    mostrarlista()
    cont.innerHTML = lista.length 
}
function limpar(){
    lista = []
    mostrarlista()
    cont.innerHTML = lista.length 
}

function mostrarlista() {
    let ul = document.getElementById(`lista`)

    ul.innerHTML = ``

    for (let i = 0; i < lista.length; i++) {
        ul.innerHTML += `<li>${lista[i]}</li>`
    }
}
for (let i = 0; i < lista.length; i++) {
    
}
