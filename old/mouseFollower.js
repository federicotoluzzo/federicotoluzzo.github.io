const follower = document.createElement("div");
follower.className = "follower";
document.getElementsByTagName("body")[0].appendChild(follower);

let prevX = 0;
let prevY = 0;
let prevPrevY = 0;
let prevPrevX = 0;


document.addEventListener("mousemove", updateFollower);

function updateFollower(event){
    let x = event.clientX;
    let y = event.clientY;

    follower.style.height = 20 + 20 * Math.log(Math.sqrt(Math.abs(prevX - prevPrevX) + Math.abs(prevY - prevPrevY))) + "px";
    follower.style.opacity =
    follower.style.transform = "rotate(" + Math.atan(-(prevX - prevPrevX) / (prevY - prevPrevY)) + "rad)";
    follower.style.top = prevY - 10 + "px";
    follower.style.left = prevX - 10 + "px";
    
    prevPrevX = prevX;
    prevPrevY = prevY;
    
    prevX = x;
    prevY = y;
}
