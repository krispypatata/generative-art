let x1, x2, y2, x3, y3, x4;
let maxX2;

let ang;
let pedals;
let layers;

function setup() {
  createCanvas(500, 500);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  translate(width / 2, height / 2); // Center the origin
  // circle(0, 0, 10); // Draw a small circle at the origin
  
  pedals = round(random(8, 40));
  layers = random(4, 40);

  ang = 360 / pedals;

  for (let j = layers; j > 0; j--) {
    let layer = j / layers;

    x1 = random(185 * layer, 205 * layer);

    x2 = random(190 * layer, 215 * layer);
    maxX2 = x2 * tan(ang) * 0.9;
    y2 = random(15 * layer,maxX2 * layer);

    x3 = random(210 * layer, 230 * layer);
    y3 = random(15 * layer, maxX2 * layer);

    x4 = random(230 * layer, 245 * layer);
    
    
    let hue = random(256);
    let sat = random(70, 100);
    let bri = random(70, 100);
    let alph = random(40, 100);

    fill(hue, sat, bri, alph);

    for (let i = 0; i < pedals; i++) {
      // stroke(0, 0, 0);
      noStroke();

      beginShape();
      curveVertex(x1, 0);
      curveVertex(x1, 0);
      curveVertex(x2, y2);
      curveVertex(x3, y3);
      curveVertex(x4, 0);
      curveVertex(x4, 0);
      endShape();
    
      beginShape();
      curveVertex(x1, 0);
      curveVertex(x1, 0);
      curveVertex(x2, -y2);
      curveVertex(x3, -y3);
      curveVertex(x4, 0);
      curveVertex(x4, 0);
      endShape();
      
      // stroke(hue, sat, bri, alph);
      // strokeWeight(5);
      // line(x1, 0, x4, 0);

      rotate(ang);
    }
  }
}

function draw() {
  


}
