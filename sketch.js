
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(950, 515);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1590,20)
	box1 = new Box(475,220,175,50);
	box2 = new Box(455,450,80,80);
	ball = new Ball(890,290,50);
	ball1 = new Ball(60,290,50)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  ball.display();
  ball1.display();




  drawSprites();
 
}



