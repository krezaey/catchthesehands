let width = 960,
    height = 500,
    coordinates = {
      section1: 330,
      section2: 530,
    },
    middle = (coordinates.section1 + coordinates.section2) / 2;


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
  strokeWeight(4);
  rect(0,0,coordinates.section1,height-1);
  rect(coordinates.section1,0,230,height-1);
  rect(coordinates.section2,0,coordinates.section1,height-1);
}

function drawHoop() {
  strokeWeight(1);
  //bar
  rect(115,200,20,297);
  //backboard
  rect(50,100,150,150);
  //rim
  ellipse(125,200,80,10);
}

function drawBasketball() {
  strokeWeight(1);
  let moveX = width - 160,
      moveY = height - 60;
  ellipse(moveX, moveY, 100);
}

function drawGame() {
  //game container
  rect(middle - 20, 50, 40, 400);
  //success bar
  rect(middle - 20, 200, 40, 100);
  //basketball icon
  ellipse(middle, height - 250, 45);
}
