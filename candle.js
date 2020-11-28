class Candle{

    constructor(x,y,r){

        var opction={

        'density':2.0,
        'friction':0.03,
        'restitution':0.5

        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,r,opction);
        this.r=r;
        World.add(world,this.body);

    }
    display(){

        var ballpos=this.body.position;
        var angle=this.body.angle;

        push()
        translate(ballpos.x,ballpos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("red");
        ellipse(0,0,this.r);
        pop()

    }
}