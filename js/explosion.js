class Explosion {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.width = 595;
        this.height = 512;
        this.frames = 8;
        this.frame = 0;
        this.image = image;
        this.isFinished = false;
    }
    getFrame(){
        return Math.floor(this.frame);
    }
    animate() {
        if(this.frame <= this.frames){
            context.drawImage(this.image, this.width * this.getFrame(), 0, this.width, this.height, this.x - 50, this.y - 50, 100, 100);
        }else{
            this.isFinished = true;
        }
        this.frame += 0.5;
    }
}