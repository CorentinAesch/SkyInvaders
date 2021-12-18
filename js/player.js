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
        image.src = "./Images/PLanegamecomplete2dgameassetpack--115i4a6j439t9i112e/planes/plane_1/plane_1_yellow.png";
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }
}