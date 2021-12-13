class Ennemy {
    constructor(verticalPosition) {
        this.x = canvas.width;
        this.y = verticalPosition;
        this.width = ennemyWidth;
        this.height = ennemyHeight;
        this.speed = ennemySpeed;
        this.health = 100;
        this.timer = 0;
    }

    move() {
        context.clearRect(this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }

    draw() {
        context.fillStyle = "black";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = "gold";
        context.font = "30px Orbitron", 
        context.fillText(Math.floor(this.health), this.x + 15, this.y + 15);
    }
}