var ruota = document.getElementById("ruota");
var rot = 0;
var mouseX = 0;
var mouseY = 0;
localStorage.setItem("deg", (0).toString());
setInterval(function () {
    localStorage.setItem("deg", (parseInt(localStorage.getItem("deg")) + 1).toString());
    ruota.style.transform = "rotate(" + localStorage.getItem("deg") + "deg)";
    rot += 1;
    movePanels();
}, 10);
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        var panel = document.createElement("div");
        panel.className = "perspective";
        panel.style.background = "rgb(" + (i + j) * 28 + ", " + ((i + j) * 28 - 255) + ", " + (i + j) * 28 + ")";
        document.getElementsByClassName("center")[0].appendChild(panel);
    }
}
document.addEventListener("mousemove", function (mouse) {
    mouseX = mouse.x;
    mouseY = mouse.y;
    movePanels();
});
function movePanels() {
    var items = document.getElementsByClassName("perspective");
    for (var i = 0; i < items.length; i++) {
        var rect = items.item(i).getBoundingClientRect();
        var centerX = rect.x + rect.width / 2;
        var centerY = rect.y + rect.height / 2;
        var deltaX = mouseX - centerX;
        var deltaY = mouseY - centerY;
        //const rotY = deltaX > 0 ? Math.log(deltaX) * 2 : Math.log(-deltaX) * -2;
        //const rotX = deltaY > 0 ? Math.log(deltaY) * -2 : Math.log(-deltaY) * 2;
        var rotX = deltaY / -5;
        var rotY = deltaX / 5;
        items.item(i).style.transformStyle = "preserve-3d";
        items.item(i).style.transform = "perspective(50px) rotateX(".concat((rotX + rot).toString(), "deg) rotateY(").concat(rotY.toString(), "deg)");
    }
}