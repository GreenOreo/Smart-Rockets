var maxForce = 0.1;
var mutationForce = 0.1;
function DNA(newgenes){
    if(newgenes){
        this.genes = newgenes;
    }
    else {
        this.genes = [];
        for (var i = 0; i < lifespan; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(maxForce);
        }
    }
    this.crossover = function(parentB){
        var newgenes = [];
        var mid = floor(random(lifespan));
        for(var i= 0 ; i < lifespan ; i++){
            if(i > mid){
                newgenes[i] = this.genes[i];
            }
            else {
                newgenes[i] = parentB.genes[i];
            }
        }

        return new DNA(newgenes);
    }

    this.mutation = function(){
        for(var i =0 ; i < this.genes.lenght ; i++){
            if(random(1) < 0.01){
                this.genes[i].setMag(mutationForce);
            }
        }
    }
}
