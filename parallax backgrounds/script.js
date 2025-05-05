const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width =500;
const CANVAS_HEIGHT = canvas.height =300;
let gameSpeed = 15;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'img/layer-1.png';

const backgroundLayer2 = new Image();
backgroundLayer2.src = 'img/layer-2.png';

const backgroundLayer3 = new Image();
backgroundLayer3.src = 'img/layer-3.png';

const backgroundLayer4 = new Image();
backgroundLayer4.src = 'img/layer-4.png';

const backgroundLayer5 = new Image();
backgroundLayer5.src = 'img/layer-5.png';

const spriteWidth = 2400;//2400-px/1
const spriteHeight = 720;//720-px/1

let x = 0;
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    //ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer4, x, 0, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if (x < -2400) x = 2400;
    else x -= gameSpeed;
    requestAnimationFrame(animate);
}
animate();