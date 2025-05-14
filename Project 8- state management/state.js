export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
}

class State {
    constructor(states){
        this.state = state;
    }
}

class StandingLeft extends State {
    constructor(player){
        super("STANDING LEFT");
        this.player = player;
    }
    enter(){

    }
    handleInput(){
        
    }
}