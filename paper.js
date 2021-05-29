class paper{
    constructor(){
        var options ={
            
            restitution :0.3,
            friction :0,
            density :1.2,
            isStatic :false
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
      
        this.image = loadImage("Images/paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
    }
}