var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car =createSprite(50, 200, 50, 50);
  wall = createSprite(900, 200, 60, height/2);
  car.velocityX = 0;
}

function draw() {
  background(255,255,255);  
  wall.shapeColor = (80, 80, 80);
  car.shapeColor = "turquoise";
  car.velocityX = speed;
  if(car.x-wall.x < car.width/2+wall.width/2&& 
    wall.x - car.x< car.width/2+wall.width/2&& 
    car.y - wall.y< car.height/2+ wall.height/2&&
    wall.y - car.y < car.height/2+ wall.height/2) {
    car.shapeColor = "royalblue";
    wall.shapeColor = "royalblue";
  }
  else {
    car.shapeColor = "turquoise";
    wall.shapeColor = (80, 80, 80);
    car.velocityX = 0;
  }
  drawSprites();
}
