var iss,spacecraft;
var hasDocked;
var doc;
 var dokt; 



function preload(){
  issimg=loadImage("Docking-undocking/iss.png");
  spacebgimg=loadImage("Docking-undocking/spacebg.jpg");
  spacecraft1img=loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2img=loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3img=loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4img=loadImage("Docking-undocking/spacecraft4.png");
}


function setup() {
  createCanvas(800,400);
   doc=createSprite(315,138,5,5);
   

  spacecraft=createSprite(285,240);
  spacecraft.addImage(spacecraft1img);
  spacecraft.scale=0.15;

  iss=createSprite(330,130);
  iss.addImage(issimg);
  iss.scale=0.25;
}

function draw() {
  background(spacebgimg); 
  

  drawSprites();
  if (!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
  }
  if (keyDown("UP_ARROW")){
    spacecraft.addImage(spacecraft1img)
    spacecraft.y=spacecraft.y-2;
  
  }
  if (keyDown("RIGHT_ARROW")){
  spacecraft.addImage(spacecraft4img)
  spacecraft.x=spacecraft.x+2;
  
  }
  if (keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraft3img)
    spacecraft.x=spacecraft.x-2;
    
    }
  
  if (keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraft2img)

    }
    if (spacecraft.isTouching(doc)){
    hasDocked=true;
    fill(300,300,300); 
    stroke("white");
    textSize(25); 
    text("DOCKING SUCESSFUL!",40,40);
   
      }
        


}
