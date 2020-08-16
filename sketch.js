var dustbinIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
function preload()
{
dustbinIMG.loadImage("Sprites/dustbingreen.png")
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	var dustbin1= createSprite(610,580,20,100);
	var dustbin2= createSprite(650,630,100,20);
	var dustbin3= createSprite(690,580,20,100);
	dustbin3.addImage(dustbinIMG)
	ground1 = new ground(400,650,800,20);
	paper1 = new Paper(200,650,20,20);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ground1.display()
  paper1.display()
  drawSprites();
}