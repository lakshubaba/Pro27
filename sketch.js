
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var stand;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	var options = {
		isStatic: true
	}
	stand = Bodies.rectangle(400, 100, 250, 20, options);
	World.add(world, stand);

	
	bob1 = new Ball(300, 500);
	bob2 = new Ball(350, 500);
	bob3 = new Ball(400, 500);
	bob4 = new Ball(450, 500);
	bob5 = new Ball(500, 500);

	rope1 = new Chain(bob1.ball, 300,100);
	rope2 = new Chain(bob2.ball, 350,100);
	rope3 = new Chain(bob3.ball, 400,100);
	rope4 = new Chain(bob4.ball, 450,100);
	rope5 = new Chain(bob5.ball, 500,100);
	
	Engine.run(engine);
  
}

function draw() {
  
  background("LightGrey");
  rectMode(CENTER);
  fill('brown');
  rect(stand.position.x, stand.position.y, 250, 20);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
	Matter.Body.applyForce(bob5.ball,bob5.ball.position,{x:-50,y:-45});
	}
}


