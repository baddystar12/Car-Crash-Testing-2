var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car =createSprite(50, 200, 50, 50);
  wall = createSprite(900, 200, 60, height/2);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  wall.shapeColor = (80, 80, 80);
  car.shapeColor = "turquoise";
  if(car.x-wall.x < car.width/2+wall.width/2&& 
    wall.x - car.x< car.width/2+wall.width/2&& 
    car.y - wall.y< car.height/2+ wall.height/2&&
    wall.y - car.y < car.height/2+ wall.height/2) {
    var deformation = 0.5*weight*speed*speed/22500;
    car.velocityX = 0;
    car.shapeColor = "royalblue";
    wall.shapeColor = "royalblue";
    if(deformation>180){
    car.shapeColor = "red";
  }
  if(deformation>100&&deformation<180){
    car.shapeColor = "yellow";
  }
  if(deformation<=100){
    car.shapeColor = "green";
  }
  }
  drawSprites();
}
