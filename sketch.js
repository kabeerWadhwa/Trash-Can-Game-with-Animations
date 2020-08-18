var dustbinIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
function preload()
{
dustbinIMG = loadImage("Sprites/dustbingreen.png")
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	//var dustbin1= createSprite(610,580,20,100);
	//var dustbin2= createSprite(650,630,100,20);
	var dustbin3= createSprite(690,580,20,100);
	dustbin3.addImage(dustbinIMG)
	dustbin3.scale = 0.5
	ground1 = new ground(400,650,800,20);
	paper1 = new Paper(200,650,20,20);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);
  Engine.update(engine)
  ground1.display()
  paper1.display()
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85, y:-85})
	}
}