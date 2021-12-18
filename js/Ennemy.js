class Ennemy {
    constructor(verticalPosition) {
        this.x = canvas.width;
        this.y = verticalPosition;
        this.width = ennemyWidth;
        this.height = ennemyHeight;
        this.speed = ennemySpeed;
        this.health = 100;
        this.timer = 0;
        this.image = new Image();
        this.image.src = "/Images/PLanegamecomplete2dgameassetpack--115i4a6j439t9i112e/planes/plane_1/plane_1_red_inverted.png";
    }

    move() {
        context.clearRect(this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }

    draw() {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.fillStyle = "grey";
        context.font = "30px Montserrat", 
        context.fillText(Math.floor(this.health), this.x + 10, this.y);
    }
}