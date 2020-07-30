class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(200,390,400,10, options);
        this.width = 400;
        this.height = 10;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height)
    }

}