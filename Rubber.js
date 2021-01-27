class Rubber {
    constructor(x,y,radius){
        var options= {
            'density':1,
            'restitution':0.3,
            'friction':5
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius;
        World.add(world,this.body)
    }

    display () {
        var pos=this.body.position
        var angle=this.body.angle
        push();
        fill("purple")
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop();
    }






}