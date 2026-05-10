const game = document.getElementById("game");
const player = document.getElementById("player");

let posX = (game.clientWidth - player.clientWidth) / 2;

player.style.left = posX + "px";

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        if (posX < game.clientWidth - player.clientWidth) {
            posX += 50;
        }
    }

    if (event.key === "ArrowLeft") {
        if (posX > 0) {
            posX -= 50;
        }
    }

    player.style.left = posX + "px";
});