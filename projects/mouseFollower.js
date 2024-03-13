const follower = document.createElement("div");

let prevX = 0;
let prevY = 0;

follower.className = "follower";

document.addEventListener("mousemove", updateFollower);

function updateFollower(event){
    let x = event.clientX;
    let y = event.clientY;

    follower.style.width = Math.log(Math.sqrt(Math.abs(x - prevX) + Math.abs(y - prevY))) + "px";
    follower.style.transform = "rotate(" + Math.atan((prevX - x) / (prevY - y)) + "rad)";

    prevX = x;
    prevY = y;
}