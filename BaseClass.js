class BaseClass{
    constructor(x,y, width, height){

        this.width = width;
        this.height = height;

        var options = {
            restitution:0,
            friction:1
        }
        
        this.body = Bodies.rectangle(x,y,this.width, this.height,options);
        this.image = loadImage("smango.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.width, this.height);
        pop();
    }
}