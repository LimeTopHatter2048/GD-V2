window.addEventListener('load',function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(ctx, width, height){
            this.ctx = ctx;
            this.width = width;
            this.height = height;
            this.enemies = [];
            this.enemyInterval = 20;
            this.enemyTimer = 0;
        }
        update(deltaTime){
            this.enemies = this.enemies.filter(object => !object.markedForDeletion);
            if (this.enemyTimer > this.enemyInterval){
                this.#addNewEnemy();
                this.enemyTimer = 0;
                console.log(this.enemies);
            } else{
                this.enemyTimer ++;// += deltaTime;
            }

            this.enemies.forEach(Object => Object.update());
        }
        draw(){
            this.enemies.forEach(Object => Object.draw(this.ctx));
        }
        #addNewEnemy(){
            this.enemies.push(new Worm(this));
        }
    }

    class Enemy {
        constructor(game){
            this.game = game;
            console.log(this.game);
            this.markedForDeletion = false;
        }
        update(){
            this.x--;
            // remove enemies
            if (this.x < 0 - this.width) this.markedForDeletion = true;
        }
        draw(ctx){
            //ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
    }

    class Worm extends Enemy {
        constructor(game){
            super(game);
            this.spriteWidth = 229;
            this.spriteHeight = 171;
            this.width=this.spriteWidth/2;
            this.height=this.spriteHeight/2;
            this.x= this.game.width;
            this.y=Math.random() * this.game.height;
            this.image = worm;
        }
    }

    const game = new Game(ctx, canvas.width, canvas.height);
    let lastTime = 0;
    function animate(timeStamp){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        game.update(deltaTime);
        game.draw();
        //some code
        requestAnimationFrame(animate);
    }
    animate();
});