const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon_img;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
function preload(){
    polygon_img=loadImage("polygon.png")

}

function setup(){
var canvas = createCanvas(1200,400);

engine = Engine.create();
	world = engine.world;

ground1 = new Ground (350,350,500,10);
ground2 = new Ground (700,200,500,10);


//first ground
block1 = new Block (300,275,30,40);
block2 = new Block (330,275,30,40);
block3 = new Block (360,275,30,40);
block4 = new Block (390,275,30,40);
block5 = new Block (420,275,30,40);
block6 = new Block (450,275,30,40);
block7 = new Block (480,275,30,40);
block8 = new Block (330,235,30,40);
block9 = new Block (360,235,30,40);
block10 = new Block (390,235,30,40);
block11 = new Block (420,235,30,40);
block12 = new Block (450,235,30,40);
block13 = new Block (360,195,30,40);
block14 = new Block (390,195,30,40);
block15 = new Block (420,195,30,40);
block16 = new Block (390,155,30,40);

//second ground
block17 = new Block (640,175,30,40);
block18 = new Block (670,175,30,40);
block19 = new Block (700,175,30,40);
block20 = new Block (730,175,30,40);
block21 = new Block (760,175,30,40);
block22 = new Block (670,135,30,40);
block23 = new Block (700,135,30,40);
block24 = new Block (730,135,30,40);
block25 = new Block (700,95,30,40);

ball=Bodies.circle(50,200,20);
World.add(world,ball);



slingshot= new SlingShot (this.ball,{x:100,y:200});


Engine.run(engine);
}
 
function draw(){

background(222);

ground1.display();
ground2.display();
fill("red");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("pink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("purple");
block13.display();
block14.display();
block15.display();
fill("orange");
block16.display();
fill("blue");
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
fill("green");
block22.display();
block23.display();
block24.display();
fill("yellow");
block25.display();







image(polygon_img,ball.position.x,ball.position.y,40,40)

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x:mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body);
    }
}