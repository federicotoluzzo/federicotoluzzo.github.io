export class Bubble{
    static lastID = 0;
    id;
    size;
    height;
    bubble;
    parent;

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
        this.bubble.style.filter = "blur(" + Math.abs(this.size - 25) / 5 + "px)";
        this.height = window.outerHeight;
        this.bubble.style.top = this.height + "px";
        this.bubble.style.zIndex = (Math.floor(this.size / 10) - 3);
        parent.appendChild(this.bubble);
        this.bubble = document.getElementById(this.id);
        //setInterval(this.float, 1000/60);
        setInterval(() => this.float(), 1000 / 60);
    }
    float(){
        console.log(this.parent);
        if(this.height < -this.size){
            this.parent.removeChild(this.bubble);
        }
        this.height -= (this.size)/10;
        this.bubble.style.top = this.height + "px";
    }
}