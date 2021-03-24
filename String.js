class String{
    constructor(bodyA,pointB){
        this.bodyA = bodyA
        this.pointB = pointB;
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        } 
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(255,255,255);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.body.bodyA = null
    }

    attach(){
        this.body.bodyA = this.bodyA;
    }
        
}
