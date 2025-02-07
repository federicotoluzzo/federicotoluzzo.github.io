import {Bubble} from "/bubble.js";

setInterval(
    function addRandomBubble(){
        const body = document.getElementsByTagName("body")[0];
        const bubble = new Bubble(Math.floor(Math.random() * 50 + 10), body);
},  100);