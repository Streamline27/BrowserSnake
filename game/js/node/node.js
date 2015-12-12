/**
 * Created by Vladislav on 12/9/2015.
 */

function Node(x, y){
    // Private variables
    var CLASS_NAME = "node";
    var sprite;
    // Initialization
    createSprite();

    // Public:
    this.getX = function(){
        return x;
    };
    this.getY = function(){
        return y;
    };


    this.changeXY = function(X, Y){
        x = X;
        y = Y;
    };

    this.setClassName = function(className){
        sprite.className = className;
    };

    this.redraw = function(){
        sprite.style.top  = y+"px";
        sprite.style.left = x+"px";
    };

    // Private:
    function createSprite() {
        sprite = document.createElement("div");


        sprite.className = CLASS_NAME;
        document.body.insertBefore(sprite, document.body.firstChild);
        sprite.style.top  = y+"px";
        sprite.style.left = x+"px";

    }
}