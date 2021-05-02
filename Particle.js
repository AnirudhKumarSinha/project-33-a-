class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.remove=true
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
       if(this.body.position.y<720){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
        
       }
        if(this.body.position.y>720 && this.remove===true){
           // World.remove(world, this.body);
           if(this.body.position.x<330){
               score=score+500
               this.remove=false;
           }
           if(pos.x>330 && pos.x<650){
               score=score+100;
               this.remove=false;
           }
           if(pos.x>650){
               score=score+200;
               this.remove=false;
           }
        }
        if(this.body.position.y>750){
            World.remove(world, this.body);
        }
    }

};