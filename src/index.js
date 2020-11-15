import "pixi.js";
import Snake from './snake.png';

function main() {
    alert("It is beautiful snake!!!");
    const div = document.createElement("div");

    const snakeImg = new Image();
    snakeImg.src = Snake;

    div.appendChild(snakeImg);

    document.body.appendChild(div);
}

main();