/**
 * Created by Vladislav on 12/9/2015.
 */
function Game(){
    var STEP_INTERVAL = 100;
    var DEFAULT_SNAKE_SIZE = 6;
    var DEFAULT_COMMAND = "DOWN";

    var snake;
    var command;

    // public methods

    this.runGame = function(){
        command = DEFAULT_COMMAND;
        createDefaultSnake();
        setInterval(this.step, STEP_INTERVAL);

    };

    this.step = function(){
        snake.setDirection(command);
        snake.redraw();
    };

    this.commandSnake = function(event){
        command = parseCommand(event);
    };

    // Private helper functions
    function createDefaultSnake() {
        snake = new Snake({x: 400, y: 400}, DEFAULT_SNAKE_SIZE);
    }

    function parseCommand(event){
        key = getKey(event).toUpperCase();
        if (key === "W") return "UP";
        else if (key === "S") return "DOWN";
        else if (key === "D") return "RIGHT";
        else if (key === "A") return "LEFT";
    }

    function getKey(event){
        return String.fromCharCode(event.which);
    }


}
// Creating instance of a game
game = new Game();

