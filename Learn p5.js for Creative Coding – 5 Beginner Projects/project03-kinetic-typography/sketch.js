let size = 50;
let rows;
let cols;

let boxes = [];

let font;

let msg = "H"; let points = [];
let fontX = -140; 
let fontY = 150; 
let fontSize = 400;

function preload() {
  font = loadFont("fonts/Roboto-Bold.ttf");
}

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);

  cols = width/size;
  rows = height/size;

  points = font.textToPoints(msg, fontX, fontY, fontSize);


  for (let i = 0; i < cols; i++) {
    boxes[i] = [];
    for (let j = 0; j < rows; j++) {
      boxes[i][j] = new Box(size / 2 + i * size - size * cols / 2, size / 2 + j * size - size * rows / 2);
    }
  }
}

function draw() {
  background(0, 0, 139);

  let x = map(mouseX, 0, width, 0, 360);

  // rotateZ(x);
  // rotateX(x);
  // rotateY(x);
  let distance;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j ++) {
      for (let k = 0; k < points.length; k++) {
        distance = dist(points[k].x, points[k].y, boxes[i][j].x, boxes[i][j].y);

        if (distance < 20) {
          boxes[i][j].isLetter = true;
        } 
      }

      boxes[i][j].display();
    }
  }

  fill(255, 0, 0);

  // Show Letter "H" in terms of ellipsis
  // for (let i = 0; i < points.length; i++) {
  //   ellipse(points[i].x, points[i].y, 10, 10);
  // }

  // fill(255, 0, 0);
  // box(50);
}
