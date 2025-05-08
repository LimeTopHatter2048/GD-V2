/** @type {HTMLCanvasElement}  */
const canvas =document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width =500/2;
CANVAS_HEIGHT = canvas.height =1000/2;
const numberOfEnemies = 100;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = 'img/enemy1.png';
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth/3;
        this.height = this.spriteHeight/3;
        this.frame = 0;
        this.frameSpeed = Math.floor(Math.random() * 3 + 1); //To get rid of decimal points interfere with the updating image 
    }
    update(){
        this.x += this.speed;
        this.y += this.speed;
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