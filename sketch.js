var garden,rabbit;
var gardenImg,rabbitImg;
var apple,apples,appleImage;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage=loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();

  drawSprites();
}


function spawnApples ()   {


  if(frameCount % 60 === 0){
  apple = createSprite(400,100,40,10);
  apple.addImage(appleImage)
  apple.y = Math.round(random(10,60))
  apple.velocityX= -3;
  apple.scale= 0.1;
  
apple.depth = rabbit.depth
rabbit.depth = rabbit.depth + 1;

 }

}


