let width = 960,
    height = 500,
    colorPalette = {
      court: color(233,182,131),
      basketball: color(179,82,63),
      successBar: color(90,217,58),
    };


function setup() {
  createCanvas(width, height);
}

function draw() {
  drawBackground();
  drawHoop();
}

function drawBackground() {
  rect(0,0,330,height-1);
  rect(330,0,230,height-1);
  rect(530,0,330,height-1);
}

function drawHoop() {
  rect(0,200,50,299);
  rect(0,100,150,150);
  ellipse(70,200,80,10);
}
