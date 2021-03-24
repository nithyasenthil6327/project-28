
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImg;
var mango1;
var ground;
var stone;
var kid, kidImg;
var stong;
var i = 0
var drag = 0;

function preload()
{
	treeImg = loadImage('tree.png')
	kidImg = loadImage('boy.png')
}

function setup() {
	createCanvas(800, 700);

	tree = createSprite(580,380,200,200);
	tree.addImage('tree',treeImg);
	tree.scale = 0.5;

	kid = createSprite(100,630,20,21);
	kid.addImage('kid',kidImg);
	kid.scale = 0.09;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(580,200,30,30);
	mango2 = new Mango(550,150,50,50);
	mango3 = new Mango(710,300,30,50);
	mango4 = new Mango(480,300,50,30);
	mango5 = new Mango(750,200,20,20);
	
	ground = new Ground();
	stone = new Stone(200,200);
	string = new String(stone.body,{x:55,y:580})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  ground.display();
  stone.display();
  string.display();
  
  isTouching(stone,mango1);
  isTouching(stone,mango2);
  isTouching(stone,mango3);
  isTouching(stone,mango4);
  isTouching(stone,mango5);
		
  
}


function mouseDragged(){
	if(drag === 0){
		Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
	
	
}

function mouseReleased(){
	string.fly();
	drag = 1;
}

function isTouching(body1,body2){
	 a = body1.body.position;
	 b = body2.body.position;
	
	 var distance = dist(a.x,a.y,b.x,b.y)
	 //console.log(distance)

	 if(distance<= 50){
		 Body.setStatic(body2.body,false);
	 }
	 
}

function keyPressed(){
	if(keyCode === 32){
		string.attach();
		drag = 0;
	}
}
