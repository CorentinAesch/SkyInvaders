class Fire {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.width = fireWidth;
        this.height = fireHeight;
        this.frames = 3;
        this.frame = 0;
        this.image = image;
        this.isFinished = false;
    }
    animate() {
        if(this.frame < this.frames){
            context.drawImage(this.image, this.width * this.frame, 0, this.width, this.height, this.x - 50, this.y - 50, 20, 30);
        } else {
            this.frame = 0;
        }
        this.frame += 1;
    }
}