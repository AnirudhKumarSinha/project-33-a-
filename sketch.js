var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var particle;
var PLAY=1;
var END=0;
var gameState=PLAY;
var count=0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,50);
 //text(mouseX,20,30);
// text(mouseY,70,30);
 text("500",30,750);
 text("500",110,750);
 text("500",180,750);
 text("500",270,750);
 text("100",350,750);
 text("100",420,750);
 text("100",510,750);
 text("200",590,750);
 text("200",660,750);
 text("200",750,750);



  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
  // }
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   //particles[0].display();

   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
   }
   console.log(score)

   if(count>5 ){
    textSize(40)
    text("Game Over",330,330)
  }
}


function mousePressed()
{
  //count=count+1;
  if(gameState===PLAY ){
    if(count<5){
   particle=new Particle(mouseX,10,10);
   particles.push(particle);
    }
   count=count+1;
  }
  
}