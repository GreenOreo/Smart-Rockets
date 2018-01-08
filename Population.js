
function Population(){
    this.rockets = [];
    this.popsize = 100;
    this.matingpool = [];

    for(var i = 0 ; i < this.popsize ; i++){
        this.rockets[i] = new Rocket();
    }

    this.eval = function(){
        var maxfit = 0 ;

        for (var i = 0; i < this.popsize ; i++){
            this.rockets[i].calFitness();
            if(this.rockets[i].fitness > maxfit)
                maxfit = this.rockets[i].fitness;
        }
        createP(maxfit);
        for (var i = 0; i < this.popsize ; i++)
        {
            this.rockets[i].fitness /= maxfit;
        }

        matingpool = [] ;
        for (var i = 0; i < this.popsize ; i++)
        {
            var n = this.rockets[i].fitness * 100 ;
            for(var j = 0 ; j < n ; j++){
                this.matingpool.push(this.rockets[i]);
            }
        }
    }

    this.select = function(){
        for(var i = 0 ; i < this.popsize ; i++){
            var parentA = random(this.matingpool).dna;
            var parentB = random(this.matingpool).dna;
            var child = parentA.crossover(parentB);
            child.mutation();
            this.rockets[i].reset(child);
        }
    }

    this.run = function(){
        for(var i = 0 ; i < this.popsize ; i++){
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }

}
