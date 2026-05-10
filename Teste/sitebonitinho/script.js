// 1. Declaramos as variáveis globais no topo para que todas as funções as vejam
let indice = 0;
let estafalando = false;
let falas = []; // Começa vazia e será preenchida no iniciar()

function iniciar() {
    // 2. Pegamos o nome e preenchemos a lista de falas AGORA
    const nome = document.getElementById('name').value;
    falas = [
    `* ${nome} entrou no mundo estranho.`,
    "* Um silêncio preenche o ar...",
    "* Mas você não está sozinho.",
    "* Uma figura familiar aparece diante de você.",
    "* Kris: ...",];

    document.getElementById(`inicio`).style.display = 'none';
    document.getElementById(`jogo`).style.display = 'flex';
    const kris = document.getElementById("kris");

    

    document.body.addEventListener('click', proximo);
    
    //dispara a primeira fala assim que inicia
    proximo();
}

function proximo() {
    // Só avança se não estiver falando e se ainda houver frases na lista
    if (estafalando == false && indice < falas.length) {
        if (indice == 3) {
            {
            setTimeout(() => {
            kris.classList.add("aparecer");
            
            }, 100);
            }
        }
        escrevertexto(falas[indice]);   
        indice++;
    }
}

function escrevertexto(textoParaExibir) {
    estafalando = true; 
    const seta = document.getElementById('seta');
    seta.style.display = 'none'; // Esconde a seta enquanto fala

    let i = 0;
    const textoElement = document.getElementById('texto');
    textoElement.innerHTML = ``;
    const som = document.getElementById(`som`);
    
    function escrever() {
        if (i < textoParaExibir.length) {
            textoElement.innerHTML += textoParaExibir[i];
            
            if (textoParaExibir[i] !== ` ` && textoParaExibir[i] !== `\n`) {
                som.currentTime = 0;
                som.play();
            }
            i++;
            setTimeout(escrever, 80);
        } else {
            estafalando = false; 
            seta.style.display = 'block'; 
        }
    }
    escrever();
}