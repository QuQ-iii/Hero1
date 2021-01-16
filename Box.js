class Box{
    constructor(x,y){

        var options = {
            restituion : 0.8,
            friction : 2,
            isStatic : false,
            density : 0.04
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;

        World.add(world, this.body);
    }

    fall(a){
        if(this.body.speed < 6){
            Matter.Body.setStatic(a.body,false);
           }else{
               Matter.Body.setStatic(a.body,true);
           }
           
    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("green");
        fill("lime");
        rect(0,0,this.width, this.height);
        pop();

    }
}