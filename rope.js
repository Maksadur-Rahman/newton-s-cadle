class Rope{

    constructor(bodyA,pointB){

        var opctions={

        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.2,
        length:300

        }
        this.pointB=pointB;
        
        this.rope=Constraint.create(opctions);
        World.add(world,this.rope);

    }
    display(){

        var pointB=this.pointB;
        var pointA=this.rope.bodyA.position;

        push()
        stroke("yellow");
        strokeWeight(5);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop()

    }
}
