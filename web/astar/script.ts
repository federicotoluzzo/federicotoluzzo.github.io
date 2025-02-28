document.getElementById("start").addEventListener("click", walkPath);
document.addEventListener("DOMContentLoaded", initCanvas);
document.getElementById("size").addEventListener("input", initCanvas);

const canvas:HTMLCanvasElement = document.querySelector("canvas");
const sizeInput = document.querySelector("input");
const maxSize = 420;

function walkPath(){

}

//danke claudio
function initCanvas() { // Missing () after function name
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, 420, 420);  // Missing semicolon
    const size = sizeInput.valueAsNumber;

    // gap and maxSize variables are used but not defined
    const gap = 10; // Assuming a value, replace with your actual gap
    const maxSize = 400; // Assuming a value, replace with your actual maxSize

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            // No need to get context again in each loop iteration
            context.fillStyle = "#DDD";
            context.fillRect(
                gap * 1.5 + maxSize / size * i,  // Modified for correct grid positioning
                gap * 1.5 + maxSize / size * j,  // Modified for correct grid positioning
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