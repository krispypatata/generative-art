let rectWidth = 5;
let rectHeight = rectWidth * 2;

let cols;
let rows;

let blocks = [];
let num; // Number of blocks

let colors;

let grid = [];

function setup() {
  createCanvas(400, 400);

  cols = width / rectWidth;
  rows = height / rectHeight;

  num = floor(random(3, 6)); // 3, 4, or 5

  colors = [color(255, 240, 1), color(255, 1, 1), color(1, 1, 253), color(249)];

  for (let i = 0; i < num; i++) {
    blocks[i] = new Block(colors[i % colors.length]);
  }

  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i * rectWidth, j * rectHeight, rectWidth, rectHeight, j);
    }
  }
}

function draw() {
  background(220);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      stroke(255);
      strokeWeight(0.5);
      grid[i][j].displayCell();
    }
  }

  for (let i = 0; i < num; i++) {
    blocks[i].display();
  }
}

