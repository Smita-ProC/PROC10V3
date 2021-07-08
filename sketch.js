var sea,ship;
var seaImg,shipImg;

function preload(){
 seaImg = loadImage("sea.png");
 shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
 background("blue");

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -4;
  sea.scale = 0.5;


  ship = createSprite(130,200,40,40);
  ship.addAnimation("movingShip",shipImg);
  ship.scale = 0.3
  
}

function draw() {
  background("blue");
  sea.velocityX = -4;

  if(sea.x < 0){
    sea.x = width/2;
  }

 drawSprites();
}