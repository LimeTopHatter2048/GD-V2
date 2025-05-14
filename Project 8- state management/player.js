class player {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [];
        this.currentState = this.states[0];
        this.image = document.getElementById("dogImage");
        this.spriteWidth = 200; //200
        this.spriteHeight = 181.83; //181.83
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = 0;
        this.y = 0;
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y);
    }
}