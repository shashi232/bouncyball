const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;

var ball;

function setup(){
    var canvas = createCanvas(600,600);
   
    engine = Engine.create();
    world = engine.world;

    var ground_opt = {
        isStatic:true
    }
    ground = Bodies.rectangle(300,580,600,30,ground_opt);
    World.add(world,ground);

    var ball_opt = {
      restitution:0.9
    }
    ball = Bodies.circle(300,300,30,ball_opt);
    World.add(world,ball);
}

function draw(){
    background(0);
   Engine.update(engine);

   rectMode(CENTER);
   fill("brown");
   rect(ground.position.x,ground.position.y,600,30);

   ellipseMode(RADIUS);
   fill("blue");
   ellipse(ball.position.x,ball.position.y,30,30);
}