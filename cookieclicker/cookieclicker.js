let spriteImg;
let circleX = 300;
let circleY = 300;
let radius = 50;

function preload() {
  // Load your image
  spriteImg = loadImage('assets/cookie_1.png'); // Replace with your image path
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  // Draw the circular image
  imageMode(CENTER);
  image(spriteImg, circleX, circleY, radius * 2, radius * 2);

  // Optional: draw a circle for visual reference
  noFill();
  stroke(0);
  ellipse(circleX, circleY, radius * 2);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < radius) {
    console.log("Sprite clicked!");
  }
}
