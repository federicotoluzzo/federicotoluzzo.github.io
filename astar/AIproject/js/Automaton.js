const SQRT2 = Math.sqrt(2);
class Automaton{

    expandable = [];
    expanded = [];

    constructor(x, y, env, goalX, goalY){
        this.initalX = x;
        this.initialY = y;
        this.env = env;
        this.goalX = goalX;
        this.goalY = goalY;
    }

    getSuccessors(state){
        let successors = [];
        let x = state.x;
        let y = state.y;
        x++;
        if(x < this.env.width){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + 1, this.heuristic(x, y), state));
            }
        }
        x-=2;
        if(x >= 0){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + 1, this.heuristic(x, y), state));
            }
        }
        x++;
        y++;
        if(y < this.env.height){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + 1, this.heuristic(x, y), state));
            }
        }
        y -= 2;
        if(y >= 0){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + 1, this.heuristic(x, y), state));
            }
        }

        y += 1; //tornato al punto di partenza.

        x++;
        y++;
        if(x < this.env.width && y < this.env.height){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + SQRT2, this.heuristic(x, y), state));
            }
        }
        x -= 2;
        if(x >= 0 && y < this.env.height){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + SQRT2, this.heuristic(x, y), state));
            }
        }
        y -= 2;
        if(x > 0 && y > 0){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + SQRT2, this.heuristic(x, y), state));
            }
        }
        x += 2;
        if(y >= 0 && x < this.env.width){
            if(!this.env.underObstacle(x, y)){
                successors.push(new State(x, y, state.g + SQRT2, this.heuristic(x, y), state));
            }
        }

        this.removeExpandedSuccessors(successors);

        return successors;
    }

    removeExpandedSuccessors(successors){
        for (let i = 0; i < this.expanded.length; i++){
            for (let j = 0; j < successors.length; j++){
                if(this.expanded[i].isEqual(successors[j])){
                    if(successors[j].g < this.expanded[i].g){
                        this.expanded[i].g = successors[j].g;
                        this.expanded[i].previous = successors[j].previous;
                    }
                    successors.splice(j, 1);
                }
            }
        }
        for (let i = 0; i < this.expandable.length; i++){
            for (let j = 0; j < successors.length; j++){
                if(this.expandable[i].isEqual(successors[j])){
                    if(successors[j].g < this.expandable[i].g){
                        this.expandable[i].g = successors[j].g;
                        this.expandable[i].previous = successors[j].previous;
                    }
                    successors.splice(j, 1);
                }
            }
        }
    }

    getPosLowestF(){
        let minF = 1000000;
        let posMinF;
        for(let i = 0; i < this.expandable.length; i++){
            if(this.expandable[i].f() < minF){
                minF = this.expandable[i].f();
                posMinF = i;
            }
        }
        return posMinF;
    }

    aStar(func) { // non saprei come farlo quindi facciamo che passa l'array a una funzione come parametro
        this.expandable.push(new State(this.initalX, this.initialY, 0, this.heuristic(this.initalX, this.initialY), null));
        const step = (func) => {
            if (this.expandable.length === 0) return;

            let posMinF = this.getPosLowestF();
            if (this.expandable[posMinF].h === 0.0) {
                let path = [];
                let state = this.expandable[posMinF];

                while (state.previous != null) {
                    path.push(state);
                    state = state.previous;
                }

                func(path.reverse());
                console.log("test")
                console.log(func)
                console.log("test2")
                return;
            }

            let successors = this.getSuccessors(this.expandable[posMinF]);
            this.expanded.push(this.expandable[posMinF]);
            this.expandable.splice(posMinF, 1);
            this.expandable = this.expandable.concat(successors);

            // Color the nodes
            for (const node of this.expandable) {
                this.color(node.x, node.y, "#FFA");
            }
            for (const node of this.expanded) {
                this.color(node.x, node.y, "#FAF");
            }

            setTimeout(() => {step(func)}, 50);
        };
        step(func);
    }

    heuristic(stateX, stateY){
        console.log(SQRT2 * Math.min(stateX - this.goalX, stateY - this.goalX) + Math.abs((stateX - this.goalX) - (stateY - this.goalY)))
        return Math.abs(stateX - this.goalX) + Math.abs(stateY - this.goalY);
    }

    color(posX, posY, color){
        try{ document.getElementById(posX + " " + posY).style.background = color } catch {}
        console.log(`${posX} ${posY} ${color}`)
    }
}