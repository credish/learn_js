// constructor functions start with capital letters "A"pple
// Apples can be a different location (on  x and y axis), color and score
function Apple (x, y, color, score) 
{
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
    
};

// Apple.prototype = {
//     this.eat = function() { return "eat the apple"; };
//     this.throw = function() { return " throw the apply away"; };
// };

Apple.prototype = {
    this.eat = function() { return this; };
    this.throw = function() { return " throw the apply away"; };
};

var apple1 = new Apple( 10, 20, "red", 200 );
var apple2 = new Apple( 100, 200, "green", 50 );
var apple3 = new Apple( 20, 200, "pink", 10 );


