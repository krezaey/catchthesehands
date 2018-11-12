let width = 960,
    height = 500,
    coordinates = {
      section1: 330,
      section2: 530,
    };


function setup() {
  createCanvas(width, height);
}

function draw() {
  drawBackground();
  drawHoop();
  drawBasketball();
  drawGame();
}

function drawBackground()  {
  rect(0,0,coordinates.section1,height-1);
  rect(coordinates.section1,0,230,height-1);
  rect(coordinates.section2,0,coordinates.section1,height-1);
}

function drawHoop() {
  rect(30,200,20,299);
  rect(0,100,150,150);
  ellipse(70,200,80,10);
}

function drawBasketball() {
  ellipse(width - 160, height - 60, 100);
}

function drawGame() {
  ellise(coordinates.section2, 100, 50);
}
