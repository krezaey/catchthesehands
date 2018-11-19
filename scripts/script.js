let cwidth = 900,
  cheight = 500,
  width = cwidth - 10,
  height = cheight - 10,
  moving = {
    pbarWidth: 440,
    sbarY: 230,
    basketballY: 260
  };

function setup() {
  let canvas = createCanvas(cwidth, cheight);
}

function draw() {
  drawBackground();
  drawProgress();
  drawGameBar();
  drawGameIcon();
}

function drawBackground() {
  fill("linen");
  rect(0, 0, width, height);
}

function drawProgress() {
  //progress bar
  fill("white");
  rect(0, 0, width, 50);
  fill("green");
  rect(0, 0, moving.pbarWidth, 50);
}

function drawGameBar() {
  fill("white");
  //bar
  rect(30, 70, 50, height - 100);
  //bar to follow
  fill("lightblue");
  rect(30, moving.sbarY, 50, (height - 100) / 7);
}

function drawGameIcon() {
  fill("orange");
  ellipse(55, moving.basketballY, 40);
  if (keyIsPressed === true) {
    moving.basketballY -= 10;
  }
}
