var canvas, backgroundImg;

var guardian, alien, beam, treasure;

var score;

function preload(){
alienImg = loadImage("alien.png");
guardianImg = loadImage("girl.png");
beamImg = loadImage("beam.png");
treasureImg = loadImage("treasure.png");
backgroundImg = loadImage("bg.png");
}

function setup(){
  canvas = createCanvas(1500, 1200);


  guardian = createSprite(1150, 700);
  guardian.addImage(guardianImg);
  guardian.scale = 0.8; 

  treasure = createSprite(1400, 750);
  treasure.addImage(treasureImg);
  treasure.scale = 0.5; 

  alien = createSprite(280, 700);
  alien.addImage(alienImg);
  alien.scale = 0.5; 

  ib = createSprite(1150, 1000, 300, 1);

}

function draw(){
background(backgroundImg); 

score = 3;
textSize(30);
fill("white")
text("Lives Left: "+score, 1100, 50);

life = 100;
textSize(30);
fill("white")
text("Lifespan: "+life, 100, 50);

textSize(50);
fill("red")
text("The Ultimate War", 550, 80);


  if(keyDown(UP_ARROW)){
  guardian.y = guardian.y-20;
  }
  guardian.y = guardian.y+10;

  guardian.collide(ib);



  if(keyWentDown("space")){
  laser = createSprite(guardian.x, guardian.y, 300, 5);
  //laser.shapeColor("green");  
  laser .velocityX = -15;
    }

  spawnBeam();
 /* if(beam.isTouching(guardian)){
    score=score-1;
    beam.destroyEach();
  }*/

   /* if(laser.isTouching(alien)){
    life=life-20;
    laser.destroy();
  }*/

   /* if(beam.isTouching(laser){
    laser.destroy(); 
    beam.destroy\();
  }*/
 

drawSprites();
}

function spawnBeam(){
if(frameCount%60===0){
 beam = createSprite(0, Math.round(random(10,1000)));
 beam.addImage(beamImg);
 beam.scale = 0.5; 
 beam.velocityX = 15;
 beam.lifetime = 200;


}
}