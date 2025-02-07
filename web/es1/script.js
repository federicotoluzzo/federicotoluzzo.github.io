var ruota = document.getElementById("ruota");
localStorage.setItem("deg", (0).toString());
setInterval(function () {
    localStorage.setItem("deg", (parseInt(localStorage.getItem("deg")) + 1).toString());
    ruota.style.transform = "rotate(" + localStorage.getItem("deg") + "deg)";
}, 10);
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        var panel = document.createElement("div");
        panel.className = "perspective";
        document.getElementsByClassName("center")[0].appendChild(panel);
    }
}
document.addEventListener("mousemove", function (mouse) {
    var items = document.getElementsByClassName("perspective");
    for (var i = 0; i < items.length; i++) {
        var rect = items.item(i).getBoundingClientRect();
        var centerX = rect.x + rect.width / 2;
        var centerY = rect.y + rect.height / 2;
        var deltaX = mouse.x - centerX;
        var deltaY = mouse.y - centerY;
        //const rotY = deltaX > 0 ? Math.log(deltaX) * 2 : Math.log(-deltaX) * -2;
        //const rotX = deltaY > 0 ? Math.log(deltaY) * -2 : Math.log(-deltaY) * 2;
        var rotX = deltaY / -1;
        var rotY = deltaX / 1;
        items.item(i).style.transformStyle = "preserve-3d";
        items.item(i).style.transform = "perspective(1000px) rotateX(".concat(rotX.toString(), "deg) rotateY(").concat(rotY.toString(), "deg)");
    }
});
