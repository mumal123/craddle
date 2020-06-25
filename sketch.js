
var ground,bob1,bob2,bob3,bob4,chain,chain2,chain3,chain4
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint=Matter.Constraint
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
ground=new Ground(width/2,100,width,10,{isStatic:true})
var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });
bob1=new Bob(360,300,40)

bob2=new Bob(400,300,40)
bob3=new Bob(440,300,40)
bob4=new Bob(480,300,40)
chain=new Chain(bob1.body,ground.body,-40,0);
chain1=new Chain(bob2.body,ground.body,2,0);
chain2=new Chain(bob3.body,ground.body,45,0);
chain3=new Chain(bob4.body,ground.body,90,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 chain.display()
 chain1.display()
 chain2.display()
 chain3.display()
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}



