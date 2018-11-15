let width = 960,
  height = 500,
  coordinates = {
    section1: 330,
    midsec1: 330 / 2,
    section2: 530
  },
  middle = (coordinates.section1 + coordinates.section2) / 2,
  backgroundImage;

function preload() {
  let backgroundImage = loadImage("background.png");

}
function setup() {
  let canvas = createCanvas(width, height);
  //image must be same length as the canvas
  backgroundImage.loadPixels();
}

function draw() {
  background(backgroundImage);
  drawBackground();
  drawGame();
  drawBasketball();
}

function drawBackground() {
  rect(0, 0, coordinates.section1, height - 1);
  rect(coordinates.section1, 0, 230, height - 1);
  rect(coordinates.section2, 0, coordinates.section1, height - 1);
}

function drawBasketball() {
  let moveX = width - 160,
    moveY = height - 60;
  ellipse(moveX, moveY, 100);
  moveX = (moveX + 1) % coordinates.section3;
  moveY = (moveY + 1) % coordinates.section3;
}

function drawGame() {
  let max = 400,
    min = 50,
    upperY = 200,
    lowerY = 300;
 // while (ypos > min && ypos < max) {
  document.addEventListener("keypress", function(event) {
    if (event.key === "O") {
      //movement up and down
    }
  });
    //success bar
    rect(middle - 20, 200, 40, 100);
    //basketball icon
    ellipse(middle, height - 250, 50);
//  }
}
