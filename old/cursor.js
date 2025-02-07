export class Cursor{
    static lastID = 0;
    id;

    constructor(size, parent = document.getElementsByClassName("body")[0]){
        this.parent = parent;
        this.bubble = document.createElement("div");
        this.id = Bubble.lastID++;
        this.bubble.id = this.id;
        this.size = size;
        this.bubble.size = size;
        this.bubble.className = "bubble"
        this.bubble.style.width = this.size + "px";
        this.bubble.style.left = Math.random() * (window.outerWidth - this.size) + "px";
        this.bubble.style.filter = "blur(" + Math.abs(this.size - 25) / 3 + "px)";
        this.height = window.outerHeight;
        this.bubble.style.top = this.height + "px";
        this.bubble.style.zIndex = (Math.floor(this.size / 10) - 3);
        parent.appendChild(this.bubble);
        this.bubble = document.getElementById(this.id);
        //setInterval(this.float, 1000/60);
        setInterval(() => this.fall(), 1000 / 60);
    }
    fall(){
        console.log(this.parent);
        if(this.height < -this.size){
            this.parent.removeChild(this.bubble);
        }
        this.height -= 69/(60 - this.size);
        this.bubble.style.top = this.height + "px";
    }
}