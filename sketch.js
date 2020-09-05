var car, wall;
var speed, weight;
var deformation;


function setup() {
  createCanvas(1200, 400);

  //choosing random spped and weight of the car
  speed= random(55,90);
  weight=random(400,1500)

  //car 
  car=createSprite(50, 200, 30, 30);
  
  //move the car
  car.velocityX=speed;
  wall=createSprite(1100,200,60,400);
      

}

function draw() {
  background(245);
  drawSprites();

  if(abs(wall.x-car.x)<(100+ wall.width/2)){
    //calculate deformation amount of the car
    deformation=Math.round((0.5*weight*speed*speed)/22500);    
    car.velocityX=0;
    //car.x=1460;
    if(deformation<80){
      car.shapeColor="green";
  
    }
    else if(deformation>=80 && deformation<=180){
      car.shapeColor="yellow";
    }
    else if(deformation>=180){
      car.shapeColor="red";

    }
  
  
}
}