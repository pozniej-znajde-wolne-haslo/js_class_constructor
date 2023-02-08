"use strict";

class Ball {
  // constructor needs no RETURN!
  constructor(ballType) {
    this.ballType = ballType ? ballType : "regular";
    // ternary operator als value for the key, not separate
  }
}

const ball1 = new Ball();
const ball2 = new Ball("super");

console.log(ball1.ballType);
console.log(ball2.ballType);



/* 
Regulärer Ball Super Ball

Erstelle eine Klasse Ball.
Ball-Objekt soll ein Argument "ballType" akzeptieren,
Wenn keine Argumente angegeben werden, sollten Ball-Objekt mit dem "ballType" "regular" initialisiert werden.

Code zum Testen:
ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballType);	//=> "regular"
console.log(ball2.ballType);	//=> "super" */