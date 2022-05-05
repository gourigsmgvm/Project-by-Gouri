
var blAnimation, brAnimation,bAnimation;
var frAnimation, flAnimation, fAnimation;
var rAnimation, lAnimation;
var frontImg;
var ground,bg;
var player1;








function preload() {

  ground = loadImage("./assets/map(legend of zelda) pixelated.jpg");
  blAnimation = loadAnimation("./assets/player/back-left.gif.gif");
   brAnimation = loadAnimation("./assets/player/back-right.gif");
   bAnimation = loadAnimation("./assets/player/backMove.gif");
   frAnimation = loadAnimation("./assets/player/front-right.gif");
   flAnimation = loadAnimation("./assets/player/front-left.gif");
   fAnimation = loadAnimation("./assets/player/front move.gif");
   rAnimation = loadAnimation("./assets/player/right move.gif");
   lAnimation = loadAnimation("./assets/player/left move.gif");
      frontImg = loadImage("./assets/player/front.png");
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  player1 = createSprite(windowWidth/2,windowHeight/2,10,10)
 player1.addAnimation("backLeft",blAnimation);
 player1.addAnimation("backMove",bAnimation);
 player1.addAnimation("frontMove",fAnimation);
 player1.addAnimation("frontLeft",flAnimation);
 player1.addAnimation("frontRight",frAnimation);
 player1.addAnimation("leftMove",lAnimation);
 player1.addAnimation("rightMove",rAnimation);
 player1.addAnimation("backRight",brAnimation);
 player1.x = windowWidth/2;
 player1.y = windowHeight/2;
 player1.debug = true;

 console.log(width);
 console.log(height/2);
 console.log(player1.x, player1.y);
 
}

//BP
function draw() {
  //background(image(ground, 0, -height * 5, width, height * 6));
  bg = image(ground, -width/2+100, -height, width*3, height*3);
  player1.addImage("front",frontImg);
 player1.scale = 2.5;

  camera.position.x = player1.x;
  camera.position.y = player1.y;

  //cameraStop();
  player1.changeImage("front",frontImg)
  
 
  movePlayer();
  drawSprites();
  
 
}

function movePlayer()
{
  if(keyDown(UP_ARROW))
  {
    player1.changeAnimation("backMove",bAnimation);
    
   player1.y = player1.y - 5;
    console.log(player1.y);
  }
  if(keyIsDown(DOWN_ARROW))
  {
    player1.changeAnimation("frontMove",fAnimation);
    player1.y += 5;
    
    console.log(player1.y);
  }
  if(keyIsDown(LEFT_ARROW))
  {
    player1.changeAnimation("leftMove",lAnimation);
    player1.x -= 5;
    console.log(player1.x);
    
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    player1.changeAnimation("rightMove",rAnimation);

    player1.x +=5;
    console.log(player1.x);
  
  }
}

function cameraStop(){
  if(camera.position.y<=-windowHeight/2)
  {
    camera.position.y = -windowHeight/2;
  }

  if(camera.position.y>= windowHeight*1.4)
  {
    camera.position.y = windowHeight*1.4;
  }

  if(camera.position.x <= windowWidth/6.4)
  {
    camera.position.x = windowWidth/6.4;
  }

  if(camera.position.x >= windowWidth*2)
  {
    camera.position.x = windowWidth*2;
  }
}
