let width = 960,
  height = 500,
  coordinates = {
    section1: 330,
    midsec1: 330 / 2,
    section2: 530
  },
  middle = (coordinates.section1 + coordinates.section2) / 2,
  backgroundImage, basketball;

function preload() {
  backgroundImage = loadImage("background.png"),
  basketball = loadImage("basketball.png");

}

function setup() {
  let canvas = createCanvas(width, height);
  canvas.class("canvas");
  //image must be same length as the canvas
  backgroundImage.loadPixels();
  basketball.loadPixels();
}

function draw() {
  background(backgroundImage);
  drawGame();
  drawBasketball();
  drawProgress();
}

function drawBasketball() {
  let moveX = width - 140,
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
    if (event.key === "ArrowUp") {
      //movement up
    }
    if (event.key === "ArrowDown") {
      //movement down
    }
  });
    //success bar
    fill("green");
    rect(middle + 13, 200, 72, 100);
    //basketball icon
    fill("orange");
    ellipse(middle + 50, height - 250, 50);
//  }
}

function drawProgress() {
  fill("white");
  //whole progress bar
  rect(10, 10, width - 20, 30);
  //bar that grows and shrinks width depending on user's Progress
  fill("green");
  rect(10, 10, 10, 30);
}
