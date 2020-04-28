var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200,200,50,80);
  movingRect = createSprite(400,200,80,50);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;
console.log(movingRect.x - fixedRect.x);
  
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
  ){
  fixedRect.shapeColor = "pink";
  movingRect.shapeColor = "pink";
}
else {
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}



drawSprites();

}