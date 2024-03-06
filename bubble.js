export class Bubble{
    static lastID = 0;
    id;
    size;
    height;
    bubble;

    constructor(size, parent = document.getElementsByClassName("body")[0]){
        this.bubble = document.createElement("div");
        this.id = Bubble.lastID++;
        this.bubble.id = this.id;
        this.size = size;
        this.bubble.size = size;
        this.bubble.className = "bubble"
        this.bubble.style.width = this.size + "px";
        this.bubble.style.left = Math.random() * (window.outerWidth - this.size) + "px";
        this.bubble.style.filter = "blur(" + Math.abs(this.size - 25) / 5 + "px)";
        this.height = window.outerHeight;
        parent.appendChild(this.bubble);
        setTimeout(this.float(), 1/60.0);
    }
    float(){
        this.bubble = document.getElementById(this.id);
        this.height -= (50 - this.size);
        this.bubble.style.top = this.height + "px";
        console.log(this.bubble);
    }
}