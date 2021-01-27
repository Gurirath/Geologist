class Stone {
    constructor(x,y,width,height) {
        var options= {
            'density':6,
            'friction':2,
            'restitution':0.3

        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    } 

    display () {
        var pos=this.body.position
        var angle=this.body.angle
        push();
        fill("black")
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}