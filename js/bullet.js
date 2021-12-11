class bullet {
    constructor(y) {
        this.x = 60;
        this.y = y;
        this.width = 10;
        this.height = 5;
    }

    move() {
        this.x += 20;
    }

    draw() {
        context.fillStyle = "grey";
        context.fillRect(this.x, this.y, this.width, this.height);
        this.move();
    }
}