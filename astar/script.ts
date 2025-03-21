import { Automaton } from './AIproject/js/Automaton.js';
import { Environment } from './AIproject/js/Eviroment.js';

document.getElementById("start").addEventListener("click", walkPath);
document.addEventListener("DOMContentLoaded", initCanvas);
document.getElementById("size").addEventListener("input", initCanvas);

const canvas = document.querySelector("canvas");
const sizeInput = document.querySelector("input");
const maxSize = 420;
let size;

function walkPath() {
    const env = new Environment(sizeInput.valueAsNumber, sizeInput.valueAsNumber);
    const automaton = new Automaton(1, 1, env, 3, 3);
    const path = automaton.aStar();
    for (let i = 0; i < path.length - 1; i++) {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, 420, 420);
        context.moveTo(path[i].x * maxSize / size, path[i].y * maxSize / size);
        context.lineTo(path[i + 1].x * maxSize / size, path[i + 1].y * maxSize / size);
    }
}

//danke claudio
function initCanvas() { // Missing () after function name
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, 420, 420);  // Missing semicolon
    const size = sizeInput.valueAsNumber;

    // gap and maxSize variables are used but not defined
    const gap = 5; // Assuming a value, replace with your actual gap
    const maxSize = 420; // Assuming a value, replace with your actual maxSize

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            // No need to get context again in each loop iteration
            context.fillStyle = "#DDD";
            context.fillRect(
                maxSize / size * i,  // Modified for correct grid positioning
                maxSize / size * j,  // Modified for correct grid positioning
                maxSize / size - gap,
                maxSize / size - gap
            );  // Missing closing parenthesis
            //context.fillRect(50, 100 * i + 10 * i, 100, 100);
        }
    }
}

/*
function initCanvas(){
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, 420, 420)
    const size = sizeInput.valueAsNumber;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const context = canvas.getContext('2d');
            context.fillStyle = "#DDD";
            context.fillRect(gap * (i + 1) + maxSize / size, gap * (j + 1) + maxSize / size, maxSize / size, maxSize / size;
            //context.fillRect(50, 100 * i + 10 * i, 100, 100);
        }
    }

}*/