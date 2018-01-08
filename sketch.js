var population;
var lifespan =  300 ;
var count = 0;
var target;

var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup() {
    createCanvas(400,300);
    population = new Population();
    target = createVector(width/2 , 50);
}

function draw() {
    background(0);
    population.run();
    if(count == lifespan){
        count = 0 ;
        population.eval();
        population.select();
    }
    fill(255);
    rect(rx,ry,rw,rh);

    count++;
    ellipse(target.x,target.y,16,16);
}
