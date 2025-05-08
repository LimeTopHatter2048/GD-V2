/** @type {HTMLCanvasElement}  */
const canvas =document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width =500/2;
CANVAS_HEIGHT = canvas.height =1000/2;
const numberOfEnemies = 25;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = 'img/enemy4.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 1917 / 9; //1917 / 9
        this.spriteHeight = 212;
        this.width = this.spriteWidth/4;
        this.height = this.spriteHeight/4;
        this.x = Math.random()*(canvas.width - this.width);
        this.y = Math.random()*(canvas.height - this.height);
        this.newX = Math.random()*(canvas.width - this.width);
        this.newY = Math.random()*(canvas.height - this.height);
        this.frame = 0;
        this.frameSpeed = Math.floor(Math.random() * 3 + 1); //To get rid of decimal points interfere with the updating image 
        this.interval = Math.floor(Math.random() * 200 + 50);
    }
    update(){
        if (gameFrame % this.interval === 0){
            this.newX = Math.random()*(canvas.width - this.width);
            this.newY = Math.random()*(canvas.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx/40;
        this.y -= dy/40;

        if (this.x + this.width < 0) this.x = canvas.width;
        // animate sprites
        if (gameFrame % this.frameSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

for (let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy());
}

console.log(enemiesArray);
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();