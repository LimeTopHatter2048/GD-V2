import { StandingLeft, StandingRight, SittingLeft, SittingRight, RunningLeft, RunningRight} from "./state.js";

export default  class Player {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [new StandingLeft(this), new StandingRight(this), new SittingLeft(this), new SittingRight(this), new RunningLeft(this), new RunningRight(this)];
        this.currentState = this.states[1];
        this.image = document.getElementById("dogImage");
        this.spriteWidth = 200; //200
        this.spriteHeight = 181.83; //181.83
        this.width = this.spriteWidth/2;
        this.height = this.spriteHeight/2;
        this.x = this.gameWidth/2 - this.width/2;
        this.y = this.gameHeight - this.height;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame= 5;
        this.fps = 20;
        this.frameTimer = 0;
        this.frameInterval = 1000/this.fps;
        this.speed = 0;
        this.maxSpeed = 10;
        this.markedForDeletion = false;
    }
    draw(context){
        context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
    update(input){
        this.currentState.handleInput(input);
        // horizontal movement
        this.x += this.speed;
        if (this.x <= 0) this.x = 0;
        else if (this.x >= this.gameWidth - this.width) this.x = this.gameWidth - this.width;
    }
    setState(state){
        this.currentState = this.states[state];
        this.currentState.enter();
    }
}