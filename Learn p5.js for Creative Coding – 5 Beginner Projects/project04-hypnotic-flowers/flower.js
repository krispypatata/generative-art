class Flower {
  constructor(radius, points, flower_amp, period, speed) {
    this.x = [];
    this.y = []
    this.radius = radius;
    this.points = points;

    this.flower_radius = 0; // Is being computed
    this.flower_amp = flower_amp;
    this.period = period;
    this.speed = speed;
    this.rotateVal = 0;
  }

  display() {
    push();

    blendMode(DIFFERENCE); // Alternating white and black

    noStroke();
    fill(255);

    stroke(0);
    beginShape();

    
    for (let i = 0; i < this.points; i++) {
      let angle = i / this.points * 360;
  
      this.flower_radius = this.flower_amp * cos(angle * this.period);
  
      this.x[i] = (this.radius + this.flower_radius) * cos(angle + this.rotateVal);
      this.y[i] = (this.radius + this.flower_radius) * sin(angle + this.rotateVal);
  
      vertex(this.x[i], this.y[i]);
    }
    endShape(CLOSE);
  
    pop();

    this.rotateVal += this.speed;
  }
}