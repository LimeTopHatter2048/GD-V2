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
                if (e.key === 'ArrowDown'){
                    this.keys.push(e.key);
                }
                console.log(e.key, this.keys);
            });
        }
    }
    class Player {
        //drawing, updating player to key events
        constructor(){

        }
        update(){

        }
        draw(){
            
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

    function animate(){
        // main animation loop 60 times per second updating & drawing
    }
});