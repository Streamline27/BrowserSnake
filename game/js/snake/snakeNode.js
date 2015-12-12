/**
 * Created by Vladislav on 12/12/2015.
 */

function SnakeNode(x, y){
    var moveService = new MoveService();
    var direction = "DOWN";

    Node.call(this, x, y);


    this.move = function(){
        if(direction==="UP") moveService.moveUp(this);
        else if(direction==="DOWN") moveService.moveDown(this);
        else if(direction==="RIGHT") moveService.moveRight(this);
        else if(direction==="LEFT") moveService.moveLeft(this);
    };

    this.setDirection = function(directionNew){
        directionNew = directionNew.toUpperCase();
        if (isValidDirection(directionNew)){
            direction = directionNew;
        }
    };

    this.getDirection = function(){
        return direction;
    };

    function isValidDirection(directionNew){
        return ((directionNew === "UP")||(directionNew === "DOWN")||(directionNew === "LEFT")||(directionNew === "RIGHT"));
    }
}

