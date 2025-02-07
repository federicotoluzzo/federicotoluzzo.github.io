const ruota = document.getElementById("ruota");
localStorage.setItem("deg", (0).toString())

setInterval(() => {
    localStorage.setItem("deg", (parseInt(localStorage.getItem("deg")) + 1).toString());
    ruota.style.transform = "rotate(" + localStorage.getItem("deg") + "deg)";
}, 10);



for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const panel = document.createElement("div");
        panel.className = "perspective";
        document.getElementsByClassName("center")[0].appendChild(panel);
    }
}

document.addEventListener("mousemove", (mouse) =>  {
    const items = document.getElementsByClassName("perspective");
    for (let i= 0; i < items.length; i++) {
        const rect = items.item(i).getBoundingClientRect()
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const deltaX = mouse.x - centerX;
        const deltaY = mouse.y - centerY;
        //const rotY = deltaX > 0 ? Math.log(deltaX) * 2 : Math.log(-deltaX) * -2;
        //const rotX = deltaY > 0 ? Math.log(deltaY) * -2 : Math.log(-deltaY) * 2;
        const rotX = deltaY / -1;
        const rotY = deltaX / 1;
        items.item(i).style.transformStyle = "preserve-3d"
        items.item(i).style.transform = "perspective(1000px) rotateX(".concat(rotX.toString(), "deg) rotateY(").concat(rotY.toString(), "deg)");
    }
});
