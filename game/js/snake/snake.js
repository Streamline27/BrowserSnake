/**
 * Created by Vladislav on 12/12/2015.
 */

// defPos.x, defPos.y
function Snake(defPos, numNodes){
    // Constructor:
    var nodes = [];
    initializeNodes();

    // Public:

    this.setDirection = function(headDirection){
        shiftDirection();
        nodes[0].setDirection(headDirection)
        moveSnakeNodes();
    };


    this.redraw = function(){
        for(var i = 0; i < nodes.length; i++){
            nodes[i].redraw();
        }
    };

    this.getHeadPosition = function(){
      return{
          x: nodes[0].getX(),
          y: nodes[0].getY()
      }
    };


    // Private:
    function initializeNodes() {
        for (var i = 0; i < numNodes; i++) {
            nodes.push(new SnakeNode(defPos.x, defPos.y - 20 * i));
        }
    }

    function getTailNode(){
        return nodes[nodes.length-1];
    }

    function shiftDirection(){
        var lastIndex = nodes.length-1;
        for(var i = lastIndex; i > 0; i-- ){
            nodes[i].setDirection(nodes[i-1].getDirection());
        }
    }

    function moveSnakeNodes() {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].move();
        }
    }



}