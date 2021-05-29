
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var crumbledPaper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	crumbledPaper=new paper(200,40,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  crumbledPaper.display();
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumbledPaper.body,crumbledPaper.body.position,{x:74,y:-75});
    }
}


