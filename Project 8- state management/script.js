/* if (input === 'ArrowUp' && player.isStanding){
    // jump
} else if (input === 'ArrowDown' &&(player.isStanding || player.isRunning)){
    // sit
} else if (input === 'ArrowDown' && player.isJumping){
    // dive
} */

window.addEventListener('load', function(){
    const loading = document.getElementById('loading');
    loading.style.display = "none";
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});