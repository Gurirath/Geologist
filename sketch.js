
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground=new Ground(600,height,1200,20);
    hammer1=new Hammer(100,100);
    stone1=new Stone(600,400,70,70);
    iron1=new Iron(400,400,80,40)
    rubber1=new Rubber(300,400,56)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#00BFFF");
  

  ground.display();
  hammer1.display();
  stone1.display();
  iron1.display();
  rubber1.display();
  drawSprites();
 
}



