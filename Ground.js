class Ground{
    constructor(){
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(400,700,800,20,options);
        World.add(world,this.body)
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;

        rectMode(CENTER)
        rect(posX,posY,800,20);
    }
}
