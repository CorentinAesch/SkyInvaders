class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = bulletWidth;
        this.height = bulletHeight;
        this.speed = bulletSpeed;
        this.power = Math.floor(100/3);
    }

    move() {
        this.x += this.speed;
    }

    draw() {
        context.fillStyle = "grey";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fill();
    }
}