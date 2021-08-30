class Particle{
    constructor(x,y){
        this.r=10
        this.body=Bodies.circle(x,y,this.r)
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        
        //Particle.Color("red")
        push ()
        translate (pos.x,pos.y)
        rotate (this.body.angle)
       fill (this.color)
      ellipseMode(RADIUS)
     ellipse(0,0,this.r,this.r)
    pop ()
    }
}