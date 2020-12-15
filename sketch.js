const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 250;

function setup() {
    createCanvas(480,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,680,700,20);

    ground1 = new baseground(0,350,20,700);
    ground2 = new baseground(240,695,900,20);
    ground3 = new baseground(479,350,20,700);
    ground4 = new baseground(240,5,900,20);

    for(var k = 14;k <= 470 ;k = k+90){
      divisions.push(new Division(k,560,10,divisionHeight));
    }

    for(var j = 40;j <= width ;j = j+50){
      plinkos.push(new Plinko(j,75));
    }

    for(var j = 65;j <= width - 25 ;j = j+50){
      plinkos.push(new Plinko(j,175));
    }

    for(var j = 40;j <= width ;j = j+50){
      plinkos.push(new Plinko(j,275));
    }

    for(var j = 65;j <= width - 25 ;j = j+50){
      plinkos.push(new Plinko(j,375));
    }
    
    if(frameCount%60 === 0){
      particles.push(new Particle(random(width/2 - 10,width/2 + 10),10,10));
    }

    for(var j = random(30,440);j <= width - 5 ;j++){
      particles.push(new Particle(random(width/2 - 10,width/2 + 10),10,10));
    }
}

function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  for(var j = 0;j < particles.length;j++){
    particles[j].display();
  }

  for(var k = 0;k < divisions.length;k++){
    divisions[k].display();
  }

  for(var j = 0;j < plinkos.length;j++){
    plinkos[j].display();
  }

  drawSprites();
}
