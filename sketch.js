var movingRect;
var fixedRect;
var box1,box2,box3;
function setup() {
  createCanvas(800,800);
  movingRect= createSprite(100, 300, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug= true;
  fixedRect = createSprite(400,600,50,50);
  fixedRect.shapeColor = "green";
  fixedRect.debug=true;
  box1 = createSprite(300,300,30,30);
  box1.shapeColor = "red";
  box1.velocityX = 3;
  box2 = createSprite(100,300,20,20);
  box2.shapeColor = "green";
  box2.velocityX=3;

  box3 = createSprite(600,300,40,40);
  box3.shapeColor = "green";
  box3.velocityX = -3;
  
  
  
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  bounceOff(box2,box3);

  if(isTouching(movingRect,box1)){
    movingRect.shapeColor = "orange";
    box1.y=50;
  }

  else{
    movingRect.shapeColor = "green";
    box1.y=400;
  }
  
  drawSprites();
}