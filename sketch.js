var wall1, wall2, wall3, car1, car2,car3
var speed, weight






function setup() {
  createCanvas(800, 400);
  createSprite(400, 200, 50, 50);

  speed = randumb(55, 90)
    weight = randumb(400, 1500)

    car1=createSprite(50,200,50,50)
    wall=createSprite(1500,200,60,height/2)
    wal2=createSprite(1500,200,60,height/2)
    wal3=createSprite(1500,200,60,height/2)

    car.velocity = speed;
    
}

function draw() {
  background(255, 255, 255);
  car1.velocity.velocityX=2
  car2.velocity.velocityX=4
  car3.velocityX.velocityX=6

  if (car1 istouching wall1){
    Colide
  }
  if (car2 istouching wall2){
    Colide
  }

  if (car3 istouching wall3){
    Colide
  }

  
  
  
  
  
  
  
  
  drawSprites();



}