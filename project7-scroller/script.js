window.addEventListener('load', function(){
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class InputHandler {
        //keyboard events, array of all active keys
        constructor(){
            this.keys = [];
            window.addEventListener('keydown', e =>{
                if ((   e.key === 'ArrowDown' || 
                        e.key === 'ArrowUp' || 
                        e.key === 'ArrowLeft' || 
                        e.key === 'ArrowRight') 
                        && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                }
                console.log(e.key, this.keys);
            });
            window.addEventListener('keyup', e =>{
                if (    e.key === 'ArrowDown' || 
                        e.key === 'ArrowUp' || 
                        e.key === 'ArrowLeft' || 
                        e.key === 'ArrowRight'){
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
                console.log(e.key, this.keys);
            });
        }
    }
    class Player {
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.spriteWidth = 200; //1800/9
            this.spriteHeight = 200; //400/2
            this.width = 100;
            this.height = 100;
            this.x = 20;
            this.y = this.gameHeight - this.height;
            this.image = document.getElementById("playerImage");
            this.frameX = 0;
            this.frameY = 0;
            this.speed = 1;
        }
        update(){
            this.x += this.speed;
        }
        draw(context){
            context.fillStyle = "white";
            context.fillRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
    }
    class Background {
        //endless scrolling backgrounds
        constructor(){

        }
        update(){

        }
        draw(){
            
        }
    }
    class Enemy {
        //generate enemies
        constructor(){

        }
        update(){

        }
        draw(){
            
        }
    }
    function handleEnemies(){
        //adding, animating and removing enemies
    }
    function displayStatusText(){
        //display score or game over message
    }

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);

    function animate(){
        // main animation loop 60 times per second updating & drawing
        ctx.clearRect(0,0,canvas.width,canvas.height);
        player.draw(ctx);
        player.update();
        requestAnimationFrame(animate);
    }
    animate();
});