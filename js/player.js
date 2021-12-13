class Player {
    constructor() {
        this.x = 0;
        this.y = (canvas.height - playerHeight)/2;
        this.width = playerWidth;
        this.height = playerHeight;
        this.health = playerHealth;
    }
    draw() {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}