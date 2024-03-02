import {Bubble} from "/bubble.js";

setInterval(
    function addRandomBubble(){
        const body = document.getElementsByClassName("body")[0];
        const bubble = new Bubble(Math.random() * 30 + 10);
        body.appendChild(bubble);
        console.log("debug")
}, Math.random() * 5000);