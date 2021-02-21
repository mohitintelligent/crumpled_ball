
class paperball
 {
    constructor(x,y,radius){
        var option={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':0.2

        }
        this.body=Bodies.circle(x,y,radius,option);
        this.x=x;
        this.y=y;
        this.radius=radius;

        this.image=loadImage("paper.png");
        World.add(world,this.body);
        
    }
    display(){
        var pose=this.body.position;
        
        //var angle=this.body.angle;
        

      push();
      translate(pose.x, pose.y);
    //  rotate(angle);
     // ellipseMode(CENTER);
      //ellipse(0,0,this.radius)
      imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);

      fill(255);
      pop();
        
        
        
        
    }
}