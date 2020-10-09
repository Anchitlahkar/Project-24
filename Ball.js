class Ball{
  constructor(x,y,radius,height){
    var options={
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density:1.2
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.width = width;
    this.height = height;
    this.radius = radius
    this.height = height
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill("White");
    ellipse(pos.x, pos.y, this.radius,this.height);
  }
}