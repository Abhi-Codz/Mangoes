
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Naming varibles
var boyObject, boyImage;
var treeObject, treeImage;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var stone;
var string;

function preload()
{
	boyImage = loadImage('Plucking mangoes/boy.png');
	treeImage = loadImage('Plucking mangoes/tree.png');
}

function setup() {
	createCanvas(1366, 600);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here
	ground = new Ground(600, height - 10, 1600, 60);
	stone = new Stone(150, 300, 30);
	string = new String(stone.body, {x:100,y:400});
	mango1 = new Mango(1100, 290, 30);
	treeObject = createSprite(1100, 325);
	treeObject.addImage(treeImage);
	treeObject.scale = 0.42;


	/* mango2 = new Mango(750,130,30);
	mango3 = new Mango(900,140,30);
	mango4 = new Mango(800,70,30);
	mango5 = new Mango(750,70,30);
	mango6 = new Mango(900,230,30);
	mango7 = new Mango(700,230,40);
	mango8 = new Mango(800,150,40);
    */
    //Creating sprites

	
	boyObject = createSprite(245, 485);
	boyObject.addImage(boyImage);
	boyObject.scale = 0.150;

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background('skyblue');

  // treeObject.depth = mango1.depth;
  // mango1.depth + 1;

  ground.display();
  mango1.display();
  /*mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display(); */
  stone.display();

  drawSprites();
}