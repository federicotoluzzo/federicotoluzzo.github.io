var panel = document.getElementById("panel");
var grid;
var blinkInterval;
var nextLEDs = [
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]
];
generateBoard();
blinkRandomStuff();
function generateBoard() {
    grid = [];
    panel.style.display = "grid";
    panel.style.gridTemplateColumns = "1px 1px 1px 1px 1px 1px 1px 1px 1px 1px 1px 1px 1px 1px 1px 1px 1px 1px";
    panel.style.gridTemplateRows = "1px 1px 1px 1px 1px";
    panel.style.gap = "19px";
    //panel.style.boxShadow = "inset 0 0 10px #fff2";
    //panel.style.background = "linear-gradient(110deg,#272727 .06%,#171717)";
    panel.style.width = "fit-content";
    panel.style.marginBottom = "20px";
    var panelContainer = document.getElementById("panel_container");
    panelContainer.addEventListener("mouseenter", writeNext);
    panelContainer.addEventListener("mouseleave", blinkRandomStuff);
    for (var i = 0; i < 5; i++) {
        grid.push([]);
        for (var j = 0; j < 18; j++) {
            grid[i][j] = document.createElement("div");
            grid[i][j].style.borderRadius = "9999px";
            grid[i][j].style.aspectRatio = "1";
            grid[i][j].style.background = "hsl(240, 100%, 80%)";
            grid[i][j].id = "led " + i + " " + j;
            grid[i][j].style.mixBlendMode = "screen";
            blink(i, j, 0);
            panel.appendChild(grid[i][j]);
        }
    }
}
function blink(ledX, ledY, time) {
    grid[ledX][ledY].style.transition = "all " + time / 2 + "ms";
    grid[ledX][ledY].style.scale = "2";
    grid[ledX][ledY].style.background = "hsl(240, 100%, 75%";
    grid[ledX][ledY].style.boxShadow = "0px 0px 6px hsl(240, 100%, 75%)";
    setTimeout(function () {
        grid[ledX][ledY].style.background = "hsl(240, 100%, 25%)";
        grid[ledX][ledY].style.boxShadow = "0px 0px 6px hsl(240, 100%, 25%)";
        grid[ledX][ledY].style.boxShadow = "none";
        grid[ledX][ledY].style.scale = "1";
    }, time / 2);
}
function blinkRandomStuff() {
    clearTimeout(refreshTimeout);
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 18; j++) {
            grid[i][j].style.transition = "all " + (200 + 50 * (i + j)) + "ms";
            grid[i][j].style.background = "hsl(240, 100%, 25%)";
            grid[i][j].style.scale = "1";
        }
    }
    blinkInterval = setInterval(function () {
        var led = { x: Math.floor(Math.random() * 5), y: Math.floor(Math.random() * 18) };
        blink(led.x, led.y, Math.random() * 500 + 500);
    }, 100);
}
var refreshTimeout;
function writeNext() {
    clearInterval(blinkInterval);
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 18; j++) {
            grid[i][j].style.transition = "all " + (200 + 50 * (i + j)) + "ms";
            if (nextLEDs[i][j] == 1) {
                grid[i][j].style.background = "hsl(240, 100%, 75%)";
                grid[i][j].style.scale = "2";
            }
            else {
                grid[i][j].style.background = "hsl(240, 100%, 25%)";
                grid[i][j].style.scale = "1";
            }
        }
    }
    refreshTimeout = setTimeout(function () {
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 18; j++) {
                grid[i][j].style.transition = "all " + (200 + 50 * (i + j)) + "ms";
                if (nextLEDs[i][j] == 1) {
                    grid[i][j].style.background = "hsl(240, 100%, 75%)";
                    grid[i][j].style.scale = "2";
                }
                else {
                    grid[i][j].style.background = "hsl(240, 100%, 25%)";
                    grid[i][j].style.scale = "1";
                }
            }
        }
    }, 1000);
}
