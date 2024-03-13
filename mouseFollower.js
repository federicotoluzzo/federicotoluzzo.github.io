const follower = document.createElement("div");
follower.className = "follower";
document.getElementsByTagName("body")[0].appendChild(follower);

let prevX = 0;

let prevY = 0;

document.addEventListener("mousemove", updateFollower);

function updateFollower(event){
    let x = event.clientX;
    let y = event.clientY;

    follower.style.height = 20 + 20 * Math.log(Math.sqrt(Math.abs(x - prevX) + Math.abs(y - prevY))) + "px";
    follower.style.opacity =
    follower.style.transform = "rotate(" + Math.atan(-(x - prevX) / (y - prevY)) + "rad)";
    follower.style.top = y - 10 + "px";
    follower.style.left = x - 10 + "px";

    prevX = x;
    prevY = y;
}