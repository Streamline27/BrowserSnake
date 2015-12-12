/**
 * Created by Vladislav on 12/9/2015.
 */

function MoveService(){

    this.moveUp = function(node){
        var x = node.getX();
        var y = node.getY();
        node.changeXY(x, y-20);
    }

    this.moveDown = function(node){
        var x = node.getX();
        var y = node.getY();
        node.changeXY(x, y+20);
    }

    this.moveLeft = function(node){
        var x = node.getX();
        var y = node.getY();
        node.changeXY(x-20, y);
    }

    this.moveRight = function(node){
        var x = node.getX();
        var y = node.getY();
        node.changeXY(x+20, y);
    }
}