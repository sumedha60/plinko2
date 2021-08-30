Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=850; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 5, divisionHeight));
  }
  
  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 100; j <=width-60; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  for (var j =170; j <=width-80; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


  //create particle objects
  
  //particle=new Particle(400,300)
    
  }
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  if(frameCount%60===0){
    particles.push(new Particle(random(0,800),0))
  }
  //console.log(particles)
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  //for (var l = 140; l < divisions.length; l++) {
   // divisions[l].display();
 // }

  //display the paricles 
for (var j = 0;j < particles.length;j++){
  particles[j].display(); 
  //console.log(particles[j])
}
//console.log(particles)
  //particle.display();
}