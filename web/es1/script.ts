const ruota = document.getElementById("ruota");
let rot = 0;
let mouseX = 0;
let mouseY = 0;

localStorage.setItem("deg", (0).toString())

setInterval(() => {
    localStorage.setItem("deg", (parseInt(localStorage.getItem("deg")) + 1).toString());
    ruota.style.transform = "rotate(" + localStorage.getItem("deg") + "deg)";
    rot += 1;
    movePanels();
}, 10);



for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const panel = document.createElement("div");
        panel.className = "perspective";
        panel.style.background = "rgb(" + (i + j) * 28 + ", " + ((i + j) * 28 - 255) + ", " + (i + j) * 28 +")";
        document.getElementsByClassName("center")[0].appendChild(panel);
    }
}

document.addEventListener("mousemove", (mouse) =>  {
    mouseX = mouse.x;
    mouseY = mouse.y;
    movePanels();
});

function movePanels(){
    const items = document.getElementsByClassName("perspective");
    for (let i= 0; i < items.length; i++) {
        const rect = items.item(i).getBoundingClientRect()
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        //const rotY = deltaX > 0 ? Math.log(deltaX) * 2 : Math.log(-deltaX) * -2;
        //const rotX = deltaY > 0 ? Math.log(deltaY) * -2 : Math.log(-deltaY) * 2;
        const rotX = deltaY / -5;
        const rotY = deltaX / 5;
        items.item(i).style.transformStyle = "preserve-3d"
        items.item(i).style.transform = "perspective(50px) rotateX(".concat((rotX + rot).toString(), "deg) rotateY(").concat(rotY.toString(), "deg)");
    }
}