class Ball{
    constructor(x,y)
    {
        var options = {
            isStatic: false,
            restitution: 1,
            density: 1
        }
        this.ball = Bodies.circle(x, y, 25, options);
        World.add(world, this.ball);

    }
    display()
    {
        fill(255, 0, 255);
        ellipse(this.ball.position.x, this.ball.position.y, 50);
    }
}