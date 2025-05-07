class Block {
  constructor(colorVal) {
    this.colorVal = colorVal;
    this.colRange = this.randomLengthGen(cols + 1);
    this.rowRange = this.randomLengthGen(rows + 1);

    this.block = [];
    for (let i = this.colRange.x; i < this.colRange.y; i++) {
      this.block[i] = [];
      for (let j = this.rowRange.x; j < this.rowRange.y; j++) {
        this.block[i][j] = new Cell(i * rectWidth, j * rectHeight, rectWidth, rectHeight, j);
      }
    }
  }

  display() {
    // Set color
    stroke(this.colorVal);
    strokeWeight(3);


    for (let i = this.colRange.x; i < this.colRange.y; i++) {
      for (let j = this.rowRange.x; j < this.rowRange.y; j++) {
        if (i == this.colRange.x || i == this.colRange.y - 1) {
          stroke(0);
        } else {
          stroke(this.colorVal)
        }

        this.block[i][j].displayCell();
      }
    }
  }

  randomLengthGen(length) {
    let a;
    let b;
  
    do {
      a = floor(random(0, length));
      b = floor(random(0, length));
    } while (abs(a - b) < 4);
  
    let range = createVector(min(a, b), max(a, b));
  
    return range;
  }
  
}