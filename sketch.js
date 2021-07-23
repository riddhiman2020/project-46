const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//variables
var car1;
var car2,car3,car4,car5,car6,car7,car8,car9,car10,car11,car12,car13;
var car14,car15,car16,car17,car18,ca19,car20,car21,car22,car23,car24,car25;

//loads the images required for the project
function preload(){
  C1=loadImage("Images/car1.png")
  C2=loadImage("Images/car2.png")
  C3=loadImage("Images/car3.png")
  C4=loadImage("Images/car4.png")
  C5=loadImage("Images/car5.png")
  parking=loadImage("Images/parking-icon.png")
  track=loadImage("Images/track2.jpg");
}

function setup() {
  //canvas size
  createCanvas(displayWidth,displayHeight-100);

  //creates track
  track1 = createSprite(displayWidth/2,-2900,900,6000);
  track1.addImage("track",track);
  track1.scale=7;

  //creates invisible walls so that the car doesn't go outside
  Rwall=createSprite(200,-2900,20,8000)
  Rwall.visible=false

  Lwall=createSprite(1180,-2900,20,8000)
  Lwall.visible=false

  Twall=createSprite(700,670,2000,20)
  Twall.visible=false

  Bwall=createSprite(700,-6400,2000,20)
  Bwall.visible=false

  //creates parking icons to show where we have to park
  icon1=createSprite(380,-2470,20,20);
  icon1.addImage("icon",parking)
  icon1.scale=0.26

  icon2=createSprite(380,-3180,20,20);
  icon2.addImage("icon",parking)
  icon2.scale=0.26

  icon3=createSprite(1000,-800,20,20);
  icon3.addImage("icon",parking)
  icon3.scale=0.26

  icon4=createSprite(1000,-3970,20,20);
  icon4.addImage("icon",parking)
  icon4.scale=0.26

  //the main car(PC)
  car1 = createSprite(580,400,70,100);
  car1.addImage("car1",C1);
  car1.scale=0.4;

  //cars on the left side of the track
  car2 = createSprite(380,-340,20,20);
  car2.addImage("car2",C2);
  car2.scale=0.45;

  car3 = createSprite(380,-740,20,20);
  car3.addImage("car3",C3);
  car3.scale=0.6;

  car4 = createSprite(380,-1200,20,20);
  car4.addImage("car4",C3);
  car4.scale=0.6;

  car5 = createSprite(380,-1690,20,20);
  car5.addImage("car5",C5);
  car5.scale=0.21;

  car6 = createSprite(380,-2120,20,20);
  car6.addImage("car2",C2);
  car6.scale=0.45;

  car7 = createSprite(380,-2800,20,20);
  car7.addImage("car3",C3);
  car7.scale=0.6;

  car8 = createSprite(380,-3500,20,20);
  car8.addImage("car4",C4);
  car8.scale=0.14;

  car9 = createSprite(380,-3950,20,20);
  car9.addImage("car5",C5);
  car9.scale=0.21;

  car10 = createSprite(380,-4350,20,20);
  car10.addImage("car5",C3);
  car10.scale=0.6;

  car11 = createSprite(380,-4750,20,20);
  car11.addImage("car5",C2);
  car11.scale=0.45;

  car12 = createSprite(380,-5100,20,20);
  car12.addImage("car2",C4);
  car12.scale=0.14;

  car13 = createSprite(380,-5500,20,20);
  car13.addImage("car3",C3);
  car13.scale=0.6;

  //cars on the right side of the track

  car14 = createSprite(1000,-340,20,20);
  car14.addImage("car2",C2);
  car14.scale=0.45;

  car15 = createSprite(1000,-1200,20,20);
  car15.addImage("car4",C3);
  car15.scale=0.6;

  car16 = createSprite(1000,-1630,20,20);
  car16.addImage("car5",C5);
  car16.scale=0.21;

  car17 = createSprite(1000,-2000,20,20);
  car17.addImage("car2",C2);
  car17.scale=0.45;

  car18 = createSprite(1000,-2440,20,20);
  car18.addImage("car3",C3);
  car18.scale=0.6;

  car19 = createSprite(1000,-2800,20,20);
  car19.addImage("car3",C3);
  car19.scale=0.6;

  car20 = createSprite(1000,-3160,20,20);
  car20.addImage("car5",C5);
  car20.scale=0.21;
  
  car21 = createSprite(1000,-3560,20,20);
  car21.addImage("car4",C4);
  car21.scale=0.14;

  car22 = createSprite(1000,-4350,20,20);
  car22.addImage("car5",C3);
  car22.scale=0.6;

  car23 = createSprite(1000,-4750,20,20);
  car23.addImage("car5",C2);
  car23.scale=0.45;

  car24 = createSprite(1000,-5100,20,20);
  car24.addImage("car2",C4);
  car24.scale=0.14;

  car25 = createSprite(1000,-5500,20,20);
  car25.addImage("car3",C3);
  car25.scale=0.6;
}

function draw() {
  //creates the background
  background(255,255,255); 

  //if function to move the main car
  if(keyDown('up_arrow')){
    car1.y=car1.y-25
  }
  if(keyDown('down_arrow')){
    car1.y=car1.y+25
  }
  if(keyDown('left_arrow')){      
    car1.x=car1.x-10
  }
  if(keyDown('right_arrow')){
    car1.x=car1.x+10
  }

  //the camera keeps showing the main car
  camera.position.x = displayWidth/2;
  camera.position.y = car1.y-120;

  //function to collide the car to the wall so that is doesn't go outside
  car1.collide(Rwall);
  car1.collide(Lwall);
  car1.collide(Twall);
  car1.collide(Bwall);

  //function to create every sprite
  drawSprites();
}