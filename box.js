class Block {
  constructor(x, y, width, height) {
    var options = {
        
        'restitution':0.4,
        'friction':0
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility=255
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0, this.width, this.height);
    pop();
    if (this.body.speed<3){
     this.body.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity=this.Visiblity-5
      tint(255,this.Visiblity);
      //Do I need this?
      //image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
  }