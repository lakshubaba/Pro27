class Chain{
    constructor(A, standx, standy){

        var options = {
            bodyA: A,
           // bodyB: B,
            pointB: {x: standx,y: standy},
            stiffness: 0.04,
            length: 400
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var posA = this.chain.bodyA.position;
       
        
        strokeWeight(3); 
        line(posA.x, posA.y, this.chain.pointB.x, this.chain.pointB.y);
    }
    
}