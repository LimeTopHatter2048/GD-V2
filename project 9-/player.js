export class Player {
    constructor(game){
        this.game = game
        this.image = document.getElementById("player");
        this.spriteWidth = 100;
        this.spriteHeight = 91.3;
        this.width = this.spriteWidth/1.2;
        this.height = this.spriteHeight/1.2;
        this.x = this.game.width/2 - this.width/2;
        this.y = this.game.height - this.height;
        this.vy = 0;
        this.weight = 1;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame= 6;
        this.fps = 0.000005;
        this.frameTimer = 0;
        this.frameInterval = 1000/this.fps;
        this.speed = 0;
        this.maxSpeed = 10;
        this.markedForDeletion = false;
    }
    update(input){
        // horizontal movement
        this.x += this.speed;
        if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
    }
    draw(context){
        context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

/*         this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [new StandingLeft(this), new StandingRight(this), new SittingLeft(this), new SittingRight(this), new RunningLeft(this), new RunningRight(this), new JumpingLeft(this), new JumpingRight(this), new FallingLeft(this), new FallingRight(this)];
        this.currentState = this.states[1];
        this.image = document.getElementById("dogImage");*/