// Oscillation

let x;
let y;
let angle = 0;
let shiftingAngle = [];
let numAxis = 10;
let x2 = [];
let y2 = [];


let r = 150;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  for (let i = 0; i < numAxis; i ++) {
    shiftingAngle[i] = i * 90 / numAxis;
  }
}

function draw() {
  background(79, 148, 167);
  // stroke(0); // Reset to black every time
  stroke(255, 100); // White

  // angle = map(mouseX, 0, width, 0, 360);

  x = r * cos(angle);
  y = r * sin(angle);

  // Move the origin point from the top-left corner of the canvas to the center
  translate(width/2, height/2);

  // ellipse(width/2, height/2, 300, 300); // Without moving the origin point
  noFill(); // No color
  ellipse(0, 0, r * 2, r * 2);

  // fill(255, 0, 0); // Red
  fill(0); // Black
  ellipse(x, y, 20, 20);
  
  // fill(255); // White
  // ellipse(x, 0, 20, 20);
  // ellipse(0, y, 20, 20);

  // line(-r, 0, r, 0);
  // line(0, -r, 0, r);



  for (let i = 0; i < numAxis; i ++) {
    x2[i] = r * cos(angle + shiftingAngle[i]);
    y2[i] = r * sin(angle + shiftingAngle[i]);

    push();

    rotate(-shiftingAngle[i]);
    // stroke(0, 0, 255);
    line(-r, 0, r, 0);
    // stroke(0, 255, 0);
    line(0, -r, 0, r);
  
    fill(255); // White
    ellipse(x2[i], 0, 20, 20);
    ellipse(0, y2[i], 20, 20);

    pop();
  }

  angle += 1;
}
