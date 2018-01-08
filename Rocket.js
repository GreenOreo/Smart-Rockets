

function Rocket(){
    this.pos = createVector(width/2 , height);
    this.vel = createVector();
    this.acc = createVector();
    this.dna = new DNA();
    this.fitness = 0;
    this.completed = false;
    this.crashed = false;
    this.counter = 0 ;
    this.applyForce = function(force){
        this.acc.add(force);
    }

    this.calFitness = function(){
        var d = dist(this.pos.x,this.pos.y,target.x,target.y);
        this.fitness = map(d,0,width,width,0);
        if(this.completed == true){
            this.fitness *= 10;
            if(this.counter != 0){
                //this.fitness  = this.fitness*counter/lifespan*10;
            }
        }
        if(this.crashed == true){
            this.fitness /=10;
        }
    }

    this.update = function(){
        var d = dist(this.pos.x,this.pos.y,target.x,target.y);
        if(d < 10){
            this.completed = true ;
            this.pos = target.copy();
            this.counter = count ;
        }
        if(this.pos.x > rx && this.pos.x < rx+rw && this.pos.y > ry && this.pos.y < ry+rh){
            this.crashed = true;
        }
        if(this.pos.x > width || this.pos.x < 0){
            this.crashed = true;
        }
        if(this.pos.y > height || this.pos.y < 0){
            this.crashed = true;
        }
        this.applyForce(this.dna.genes[count]);
        if(this.completed == false && this.crashed == false){
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }


    }

    this.show = function(){
        push();
        noStroke();
        fill(255,150);
        translate(this.pos.x,this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0,0,25,5);
        pop();
    }

    this.reset = function(dna){
        this.pos = createVector(width/2 , height);
        this.vel = createVector();
        this.acc = createVector();
        this.dna = dna;
        this.completed = false;
        this.crashed = false;
        this.counter = 0 ;
    }
}
