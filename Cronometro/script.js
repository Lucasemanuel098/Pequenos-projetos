let tempoatual = 0;
let cronometro;
const btnparar = document.getElementById(`parar`)
const btniniciar = document.getElementById(`iniciar`)
const btnmarcar = document.getElementById(`marcar`)


btniniciar.addEventListener('click', function() {
    this.classList.toggle(`buttonanimado`)
    setTimeout(()=> {
        this.classList.remove(`buttonanimado`)
    }, 200)
})

btnparar.addEventListener('click', function() {
    this.classList.toggle(`buttonanimado`)
    setTimeout(()=> {
        this.classList.remove(`buttonanimado`)
    }, 200)
})

btnmarcar.addEventListener('click', function() {
    this.classList.toggle(`buttonanimado`)
    setTimeout(()=> {
        this.classList.remove(`buttonanimado`)
    }, 200)
})

function formatarTempo(tempoatual) {
    const horas = Math.floor(tempoatual / 3600);
    const minutos = Math.floor((tempoatual % 3600) / 60);
    const segundosFormatados = tempoatual % 60;
    const horasStr = horas.toString().padStart(2, '0');
    const minutosStr = minutos.toString().padStart(2, '0');
    const segundosStr = segundosFormatados.toString().padStart(2, '0');
  
    return `${horasStr}:${minutosStr}:${segundosStr}`;
}

function atualizarTempo() {
    document.getElementById('conto').innerText = formatarTempo(tempoatual)
  }
  
function iniciarCronometro() {
    if(!cronometro) {
        cronometro = setInterval(function() {
            tempoatual++;
            atualizarTempo();
          }, 1000); // Atualiza a cada segundo (1000 milissegundos)
    }
    
}  

function pararCronometro() {
    clearInterval(cronometro)
    cronometro = null
}



