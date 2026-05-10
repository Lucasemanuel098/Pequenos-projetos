let desenhando = false
const tela = document.getElementById(`tela`)
const caneta = tela.getContext(`2d`) 
const containerPaleta = document.getElementById(`paleta`) 
const cores = [
    '#000000', `#222034`, '#ffffff', '#ff0000', `#fbf236`, `#6abe30`, `#306082`, `#5fcde4`, `#ffcc00`,
   ` #6666ff`, `#cc00cc`, `#190d05`, `#2f1606`
]
cores.forEach(cor => {
    const botao = document.createElement(`button`)
    botao.style.backgroundColor = cor;
    botao.className = `botao-cor`

    botao.onclick = () => {
        caneta.fillStyle = cor
    }

    containerPaleta.appendChild(botao)
})

tela.getContext(`2d`)
caneta.fillStyle = `white`
for(let i = 0; i < 32; i++) {
    caneta.beginPath()
    caneta.lineWidth = 2
    caneta.moveTo(20 * i, 0)
    caneta.lineTo(20 * i, 640)
    caneta.stroke()
}
for(let i = 0; i <32; i++) {
    caneta.beginPath()
    caneta.moveTo(0, 20 * i)
    caneta.lineTo(640, 20 * i)
    caneta.stroke()
}
caneta.strokeRect(0, 0, 640, 640)
tela.addEventListener(`mousedown`, function(event){
    desenhando = true
    desenhar(event)
})

tela.addEventListener(`mousemove`, function(event){
    if(desenhando == true) {
        desenhar(event)
    }
})
tela.addEventListener('mouseup', function() {

    desenhando = false

})
tela.addEventListener(`contextmenu`, function(event){
    event.preventDefault()
})

function desenhar(event) {
    
    console.log(event.clientX) 
    console.log(event.clientY)
    rect = tela.getBoundingClientRect()
    let posX = event.clientX - rect.left
    let posY = event.clientY - rect.top

    paintX = posX/20
    paintY = posY/20
    
    PositionX = Math.floor(paintX) * 20
    PositionY = Math.floor(paintY) * 20
    if (event.buttons == 1) {
        caneta.fillRect(PositionX, PositionY, 20, 20)
    } 
    if (event.buttons == 2) {
        caneta.clearRect(PositionX, PositionY, 20, 20)
    }
    
    grid()
    
}
function grid(){
        for(let i = 0; i < 32; i++) {
        caneta.beginPath()
        caneta.lineWidth = 2
        caneta.moveTo(20 * i, 0)
        caneta.lineTo(20 * i, 640)
        caneta.stroke()
    }
    for(let i = 0; i <32; i++) {
        caneta.beginPath()
        caneta.lineWidth = 2
        caneta.moveTo(0, 20 * i)
        caneta.lineTo(640, 20 * i)
        caneta.stroke()
    }
    
    caneta.lineWidth = 2
    caneta.strokeRect(0, 0, 640, 640)
    
    
}
function Red(){
    caneta.fillStyle = `red`
}
function Black(){
    caneta.fillStyle = `black`
}
function White(){
    caneta.fillStyle = `White`
}





