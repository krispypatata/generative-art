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
  
  // pedals = round(random(8, 30));
  pedals = 50;
  layers = random(4, 30);

  ang = 360 / pedals;

  // drawCenter(pedals);
  // drawCenterWithSparkles();

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
      // noStroke();

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

function drawCenter(petalCount) {
  noStroke();
  
  // Base gradient circle
  for (let r = 50; r > 0; r -= 2) {
    let hue = (frameCount * 0.5 + r * 2) % 360;
    fill(hue, 90, 90, 80);
    ellipse(0, 0, r * 2, r * 2);
  }
  
  // Inner decorative rings
  let centerHue = random(360);
  let rings = [
    {radius: 40, segments: petalCount * 2, size: 4},
    {radius: 30, segments: petalCount, size: 6},
    {radius: 15, segments: petalCount/2, size: 8}
  ];
  
  for (let ring of rings) {
    fill(centerHue, 90, 100);
    for (let i = 0; i < ring.segments; i++) {
      let angle = map(i, 0, ring.segments, 0, 360);
      let x = cos(angle) * ring.radius;
      let y = sin(angle) * ring.radius;
      ellipse(x, y, ring.size, ring.size);
    }
  }
  
  // Central starburst
  let burstPoints = petalCount * 4;
  fill(centerHue, 50, 100);
  beginShape();
  for (let i = 0; i <= burstPoints; i++) {
    let angle = map(i, 0, burstPoints, 0, 360);
    let r = (i % 2 === 0) ? 20 : 10;
    let x = cos(angle) * r;
    let y = sin(angle) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
  
  // Tiny center dot
  fill(0, 0, 100);
  ellipse(0, 0, 5, 5);
}


function drawCenterWithSparkles() {
  // Create a multi-layered center with different effects
  noStroke();
  
  // Inner glow
  for (let i = 5; i > 0; i--) {
    let size = i * 15;
    let hue = random(40, 60); // Golden/yellow tones
    fill(hue, 90, 100, 30);
    ellipse(0, 0, size, size);
  }
  
  // Central core with radial pattern
  let centerHue = random(256);
  let centerDetail = round(random(10, 30));
  
  for (let i = 0; i < centerDetail; i++) {
    let angle = map(i, 0, centerDetail, 0, 360);
    let radius1 = random(5, 15);
    let radius2 = random(20, 40);
    
    push();
    rotate(angle);
    
    // Radial lines
    stroke(centerHue, 90, 100, 80);
    strokeWeight(random(1, 3));
    line(radius1, 0, radius2, 0);
    
    // Dots at ends
    noStroke();
    fill(centerHue, 90, 100);
    ellipse(radius1, 0, random(2, 5));
    ellipse(radius2, 0, random(3, 7));
    
    pop();
  }
  
  // Sparkle effect
  for (let i = 0; i < 50; i++) {
    let r = random(5, 25);
    let a = random(360);
    let x = cos(a) * r;
    let y = sin(a) * r;
    let s = random(1, 3);
    
    fill(centerHue + random(-30, 30), random(70, 100), 100);
    ellipse(x, y, s, s);
  }
}

function draw() {
  


}
