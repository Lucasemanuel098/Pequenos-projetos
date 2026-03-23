function iniciar() {
    const nome = document.getElementById('name').value;
    document.getElementById(`inicio`).style.display = 'none';
    document.getElementById(`jogo`).style.display = 'block';
    const kris = document.getElementById("kris");
    

    setTimeout(() => {
        kris.classList.add("aparecer");
    }, 100);

    const mensagem = `*${nome}...\n*Você finalmente chegou.\n*Eu estava esperando por você.`
    escrevertexto(mensagem);
}
function escrevertexto(mensagem) {
    let i = 0;
    const textoElement = document.getElementById('texto');
    const som = document.getElementById(`som`)
    
    function escrever(){
        if (i < mensagem.length){
            textoElement.innerHTML += mensagem[i]
            if (mensagem[i] !== ` ` && mensagem[i] !== `\n`){
                som.currentTime = 0;
                som.play()
            }
            i++
            setTimeout(escrever, 80)
        }
        
    }
    escrever()
    
}