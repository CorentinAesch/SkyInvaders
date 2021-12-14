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
        const image = new Image();
        image.src = "/Images/kisspng-sprite-go-space-android-flying-saucer-universe-def-alien-spacecraft-5b2e3d8e862139.2886687715297570705494.png";
        context.drawImage(image, this.x, this.y, this.width, this.height);
        context.fillStyle = "gold";
        context.font = "20px Orbitron", 
        context.fillText(Math.floor(this.health), this.x + 10, this.y + 10);
    }
}