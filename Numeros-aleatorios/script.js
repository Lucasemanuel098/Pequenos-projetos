// Gera um número aleatório
let numerocerto = Math.floor(Math.random() * 100) + 1;

// Botão de verificação
const verificar = document.getElementById(`tentei`);

// Adicionando evento (Click) no botão
verificar.addEventListener("click", verificarinput);

// Adicionando o botão de resetar
const resetar = document.getElementById(`resetar`);

// Feedback para ajudar o usuário
let feedback = document.getElementById(`feedback`);











// Função de verificar
function verificarinput() {
    // Pegando o número do usuário
    const resposta = document.getElementById(`resposta`);

    // Transformando a resposta em um número
    let res = parseInt(resposta.value);

    if (res == numerocerto) {
        feedback.innerText = `Parabéns, você acertou!`;
        
        // Adicionando o botão de resetar
        resetar.innerHTML = `<button id="resetButton">Resetar</button>`;

        // Adicionando evento ao botão de resetar
        const resetButton = document.getElementById("resetButton");
        resetButton.addEventListener("click", resetarJogo);
    } else if (res > numerocerto) {
        feedback.innerText = `Tente um número menor...`;
    } else if (res < numerocerto) {
        feedback.innerText = `Tente um número maior...`;
    }
}
// Função de resetar o jogo
function resetarJogo() {
    // Gera um novo número aleatório
    numerocerto = Math.floor(Math.random() * 100) + 1;

    // Limpa o campo de resposta e o feedback
    document.getElementById(`resposta`).value = "";
    feedback.innerText = "";

    // Remove o botão de resetar
    resetar.innerHTML = "";
}

