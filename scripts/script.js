let cwidth = 900,
  cheight = 500,
  width = cwidth - 10,
  height = cheight - 10,
  moving = {
    pbarWidth: 440,
    gamebarHeight: height - 100,
    gamebarLowerY: height - 50,
    gamebarUpperY: 30,
    sbarY: 230,
    sbarLowerY: 230 - (height - 100 / 7),
    sbarHeight: (height - 100) / 7,
    basketballY: 260
  },
    animation = {
      basketballXPos: 10,
      basketballYPos: 100
    };

function setup() {
  let canvas = createCanvas(cwidth, cheight);
}

function draw() {
  drawBackground();
  drawBasketballs();
  drawProgress();
  drawGameBar();
  moveGameBar();
  drawGameIcon();
  moveGameIcon();
  drawHoop();
}

function drawBackground() {
  noStroke();
  fill("linen");
  rect(0, 0, cwidth, cheight);
}

function drawProgress() {
  strokeWeight(1);
  stroke("black");
  fill("white");
  rect(0, 0, width, 50);
  fill("green");
  rect(0, 0, moving.pbarWidth, 50);
}

function drawGameBar() {
  fill("lightgray");
  //bar
  strokeWeight(1);
  stroke("black");
  rect(30, 70, 50, moving.gamebarHeight);
  //bar to follow
  fill("lightblue");
  rect(30, moving.sbarY, 50, moving.sbarHeight);
}

function moveGameBar() {
  let speed = random(-1, 1);
  if (moving.sbarY < moving.gamebarUpperY) {
    moving.sbarY = moving.gamebarUpperY - 50;
  } else if (moving.sbarLowerY > moving.gamebarLowerY) {
    moving.sbarY = moving.gamebarLowerY - 50;
  }
  if (speed < 0) {
    moving.sbarY = moving.sbarY - 10;
  } else if (speed > 0) {
    moving.sbarY = moving.sbarY + 10;
  }
}

function drawGameIcon() {
  noStroke();
  fill("orange");
  ellipse(55, moving.basketballY, 40);
}

function moveGameIcon() {
  if (moving.basketballY < moving.gamebarUpperY + 65) {
    moving.basketballY += 1;
  } else if (keyIsPressed === true) {
    moving.basketballY -= 5;
  } else if (moving.basketballY > moving.gamebarLowerY) {
    moving.basketballY = moving.gamebarLowerY + 1;
  } else {
    moving.basketballY += 3;
  }
}

function drawHoop() {
  stroke("black");
  fill("brown");
  rect(250, 100, 400, cheight - 200);
  fill("black");
  rect(430, 400, 50, 100);
  strokeWeight(8);
  stroke("black");
  line(330, 300, 430, 370);
  line(530, 300, 430, 370);
  stroke("yellow");
  fill("brown");
  ellipse(430, 300, 200, 60);
}

function drawBasketballs() {
  noStroke();
  fill("orange");
  ellipse(animation.basketballXPos, animation.basketballYPos, 100);
  animation.basketballXPos = (animation.basketballXPos + 1) % cwidth;
  animation.basketballYPos = (animation.basketballYPos + 1) % cheight;
}
