let width = 960,
    height = 500,
    coordinates = {
      section1: 330,
      midsec1: 330 / 2,
      section2: 530,
    },
    middle = (coordinates.section1 + coordinates.section2) / 2;


function setup() {
  createCanvas(width, height);
}

function draw() {
  drawBackground();
  drawHoop();
  drawGame();
  drawBasketball();
}

function drawBackground()  {
  rect(0,0,coordinates.section1,height-1);
  rect(coordinates.section1,0,230,height-1);
  rect(coordinates.section2,0,coordinates.section1,height-1);
}

function drawHoop() {
  strokeWeight(1);
  //bar
  rect(coordinates.midsec1 - 20,200,20,297);
  //backboard
  rect(coordinates.midsec1 - 100, 100, 200, 150);
  rect(coordinates.midsec1 - 50, 170, 100, 80);
  //rim
  ellipse(coordinates.midsec1,200,90,20);
  //net
  line(coordinates.midsec1 - 45, 200, coordinates.midsec1, 250);
  line(coordinates.midsec1 + 45, 200, coordinates.midsec1, 250);
}

function drawBasketball() {
  strokeWeight(1);
  let moveX = width - 160,
      moveY = height - 60;
  ellipse(moveX, moveY, 100);
  moveX = (moveX + 1) % coordinates.section3;
  moveY = (moveY + 1) % coordinates.section3;
}

function drawGame() {
  //game container
  rect(middle - 20, 50, 40, 400);
  //success bar
  rect(middle - 20, 200, 40, 100);
  //basketball icon
  ellipse(middle, height - 250, 50);
}
