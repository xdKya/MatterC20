//namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine, world;
var chao

function setup() {
  createCanvas(400,600);

  engine = Engine.create();
  world = engine.world;

  var chaoOptions = {
    isStatic : true
  }

  chao = Bodies.rectangle(200,590,400,20,chaoOptions);
  World.add(world,chao);

  console.log(chao)

  
}

function draw() {
  background("black");  

  Engine.update(engine);


  stroke("green");
  strokeWeight(3);
  fill("brown");

  rectMode(CENTER);
  rect(chao.position.x,chao.position.y,400,20);



}

