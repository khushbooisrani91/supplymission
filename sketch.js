var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 ,600 , -200 , {restitution:3, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
	//Matter.Body.setStatic(packageBody,false);

  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	var options ={
        restitution: 0.5
    }

    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageSprite=createSprite(width/2, 80, 10,10,options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	//packageSprite.y= 00;
    packageSprite.x= packageBody.position.x 
	  packageSprite.y= packageBody.position.y 
	  packageSprite.velocityY=3

  }
}



