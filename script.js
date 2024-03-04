function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width/2, height /2, 2);
  myShape(width/3, height/3,2.5)
  myShape(width * 2/3, height * 2/3, 1.5)
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, s,a ) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
  ellipse(0, 0, 50, 50); // simple ellipse at the translated origin (0,0)
  fill(255)
  fill("black")
  ellipse(-10,-10,10); 
  ellipse( 10,-10, 10);
  ellipse(10,-10,10);
  fill("red")
  ellipse( 10, -10,5);
  ellipse(-10,-10,5); 
  ellipse(-10,-10,5);
  
  pop(); // dispose of the layer
}
