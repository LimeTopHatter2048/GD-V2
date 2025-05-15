export class Player {
    constructor(game){
        this.game = game
        this.image = document.getElementById("player");
        this.spriteWidth = 100;
        this.spriteHeight = 91.3;
        this.width = this.spriteWidth/2;
        this.height = this.spriteHeight/2;
        this.x = this.game.width/2 - this.width/2;
        this.y = this.game.height - this.height;
    }
    update(){
        this.x++;
    }
    draw(context){
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

/*         this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [new StandingLeft(this), new StandingRight(this), new SittingLeft(this), new SittingRight(this), new RunningLeft(this), new RunningRight(this), new JumpingLeft(this), new JumpingRight(this), new FallingLeft(this), new FallingRight(this)];
        this.currentState = this.states[1];
        this.image = document.getElementById("dogImage");
        this.spriteWidth = 200; //200
        this.spriteHeight = 181.83; //181.83
        this.width = this.spriteWidth/2;
        this.height = this.spriteHeight/2;
        this.x = this.gameWidth/2 - this.width/2;
        this.y = this.gameHeight - this.height;
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
        this.markedForDeletion = false; */