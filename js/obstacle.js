class obstacle {
    constructor(y) {
        this.x = 1000;
        this.y = y;
        this.width = 50;
        this.height = 50;
    }

    draw() {
    context.fillStyle = "black";
    context.fillRect(this.x, this.y, this.width, this.height);
    }
}