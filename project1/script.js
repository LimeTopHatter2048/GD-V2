const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width =500;
const CANVAS_HEIGHT = canvas.height =500;

const playerImage = new Image();
playerImage.src = 'img/shadow_dog.png';
const spriteWidth = 575;//width-px/Com
const spriteHeight = 523;//height-px/row
let frameX=0;
let frameY=1;
let gameFrame = 0;
const staggerFrames = 5;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(50,50,100,100);
    //ctx.drawImage(image, sx, sy, sw, sh, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX*spriteWidth, frameY*spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if(gameFrame % staggerFrames == 0){
        if (frameX < 6) frameX++;
        else frameX = 0;
    }
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();