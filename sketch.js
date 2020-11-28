const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var b1,b2,b3,b4,b5;
var ground;
var r1,r2,r3,r4,r5;


function setup(){
     createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    
   ground=new Ground(600,650,1200,15);

    b1=new Candle(230,200,25);
    r1=new Rope(b1.body,{x:230,y:130});

    b2=new Candle(260,200,25);
    r2=new Rope(b2.body,{x:260,y:130});

    b3=new Candle(290,200,25);
    r3=new Rope(b3.body,{x:290,y:130});

    b4=new Candle(320,200,25);
    r4=new Rope(b4.body,{x:320,y:130});

    b5=new Candle(350,200,25);
    r5=new Rope(b5.body,{x:350,y:130});


}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    b1.display();
    r1.display();
    b2.display();
    r2.display();
    b3.display();
    r3.display();
    b4.display();
    r4.display();
    b5.display();
    r5.display();
    
    console.log(b1.x);

}

function mouseDragged(){

	Matter.Body.setPosition(b1.body,{x:mouseX,y:mouseY});

}

function mouseDragged(){

	Matter.Body.setPosition(b2.body,{x:mouseX,y:mouseY});

}


function mouseDragged(){

	Matter.Body.setPosition(b3.body,{x:mouseX,y:mouseY});

}

function mouseDragged(){

	Matter.Body.setPosition(b4.body,{x:mouseX,y:mouseY});

}


function mouseDragged(){

	Matter.Body.setPosition(b5.body,{x:mouseX,y:mouseY});

}

