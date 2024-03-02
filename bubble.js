export class Bubble extends HTMLDivElement{
    size;
    height;

    constructor(size){
        super();
        this.size = size;
        this.style.aspectRatio = "1";
        this.style.width = this.size.toString() + "px";
        this.style.borderRadius = "50%";
        this.style.background = "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(76,9,121,1) 31%, rgba(203,156,254,1) 100%)";
        this.style.filter = "blur(" + Math.abs(this.size - 25) / 5 + "px)";
        this.height = window.outerHeight;
        float();
    }

    float(){
        setInterval(
            function() {
                this.height -= (50 - this.size);
                this.style.top = this.height;
        });
    }

}