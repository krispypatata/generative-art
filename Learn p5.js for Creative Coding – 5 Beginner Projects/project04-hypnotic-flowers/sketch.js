let flowers = [];
let num = 15; // Number of flowers

let speedMultiplier = 0.1;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);



  for (let i = 0; i < num; i++) {
    if (i % 2 == 0) {
      speedMultiplier *= -1;
    }

    flowers[i] = new Flower(140 - i * 10, 100, 15, 7, ((i + 1) * speedMultiplier));
  }
}

function draw() {
  background(0);

  translate(width / 2, height / 2);
  
  for (let i = 0; i < num; i++) {
    flowers[i].display();
  }

}
