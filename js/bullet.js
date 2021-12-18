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
        const bullet = new Image();
        bullet.src = "./Images/PLanegamecomplete2dgameassetpack--115i4a6j439t9i112e/planes/torpedo/torpedo.png";
        context.drawImage(bullet, this.x, this.y, this.width, this.height);
    }

    fire () {
        for (let i = 0; i < bullets.length; i++) {
            fires.push(new Fire((this.x - fireWidth) + 300, ((this.y + bulletHeight/2) - fireHeight/2) + 77, fireImg));
        }
    }
}