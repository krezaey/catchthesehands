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
  };

function setup() {
  let canvas = createCanvas(cwidth, cheight);
}

function draw() {
  drawBackground();
  drawProgress();
  drawGameBar();
  moveGameBar();
  drawGameIcon();
  moveGameIcon();
}

function drawBackground() {
  noStroke();
  fill("linen");
  rect(0, 0, width, height);
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
  strokeWeight(1);
  stroke("black");
  fill("lightgray");
  //bar
  rect(30, 70, 50, moving.gamebarHeight);
  //bar to follow
  fill("lightblue");
  rect(30, moving.sbarY, 50, moving.sbarHeight);
}

function moveGameBar() {
  let speed = Math.floor(Math.random() * 201) - 100;
  console.log(speed);
  // if (((moving.sbarY +  moving.sbarHeight) < moving.gamebarLowerY) && (moving.sbarY > moving.gamebarUpperY)) {
  //     moving.sbarY = (moving.sbarY + speed);
  //     }

}

function drawGameIcon() {
  noStroke();
  fill("orange");
  ellipse(55, moving.basketballY, 40);
}

function moveGameIcon() {
   if (keyIsPressed === true) {
    moving.basketballY -= 5;
  }
  else if (moving.basketballY > moving.gamebarLowerY) {
    moving.basketballY = moving.gamebarLowerY + 1;
  }
  else if (moving.basketballY < moving.gamebarUpperY) {
    moving.basketballY = moving.gamebarUpperY + 5;
  }
  else {
    moving.basketballY += 3;
  }
}
