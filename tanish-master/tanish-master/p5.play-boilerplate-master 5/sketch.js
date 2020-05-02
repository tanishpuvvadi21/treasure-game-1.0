var bg;
var tunnel;
function preload()
{
  bg=loadImage("images/Background.png");
  tunnel =loadImage("images/tunnel2.png");
  tree=loadImage("images/Tile_34.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  
}

function draw() {
  background(bg);
  image(tree,100,250);
  image(tunnel,displayWidth-500,100,200,600)
  drawSprites();
}