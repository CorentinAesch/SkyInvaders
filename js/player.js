class Player {
    constructor() {
        this.x = 0;
        this.y = (canvas.height - playerHeight)/2;
        this.width = playerWidth;
        this.height = playerHeight;
        this.health = playerHealth;
    }
    draw() {
        const image = new Image();
        image.src = "/Images/kisspng-outer-space-flying-saucer-spacecraft-clip-art-color-ship-5a8ef430aca480.6920152915193180647072.png";
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }
}