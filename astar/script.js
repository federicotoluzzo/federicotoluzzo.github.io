"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Automaton_js_1 = require("./AIproject/js/Automaton.js");
var Eviroment_js_1 = require("./AIproject/js/Eviroment.js");
document.getElementById("start").addEventListener("click", walkPath);
document.addEventListener("DOMContentLoaded", initCanvas);
document.getElementById("size").addEventListener("input", initCanvas);
var canvas = document.querySelector("canvas");
var sizeInput = document.querySelector("input");
var maxSize = 420;
var size;
function walkPath() {
    var env = new Eviroment_js_1.Environment(sizeInput.valueAsNumber, sizeInput.valueAsNumber);
    var automaton = new Automaton_js_1.Automaton(1, 1, env, 3, 3);
    var path = automaton.aStar();
    for (var i = 0; i < path.length - 1; i++) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 420, 420);
        context.moveTo(path[i].x * maxSize / size, path[i].y * maxSize / size);
        context.lineTo(path[i + 1].x * maxSize / size, path[i + 1].y * maxSize / size);
    }
}
//danke claudio
function initCanvas() {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, 420, 420); // Missing semicolon
    var size = sizeInput.valueAsNumber;
    // gap and maxSize variables are used but not defined
    var gap = 5; // Assuming a value, replace with your actual gap
    var maxSize = 400; // Assuming a value, replace with your actual maxSize
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            // No need to get context again in each loop iteration
            context.fillStyle = "#DDD";
            context.fillRect(gap * 2.5 + maxSize / size * i, // Modified for correct grid positioning
            gap * 2.5 + maxSize / size * j, // Modified for correct grid positioning
            maxSize / size - gap, maxSize / size - gap); // Missing closing parenthesis
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
