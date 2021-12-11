class player {
    constructor() {
        this.x = 0;
        this.y = 200;
        this.width = 75;
        this.height = 75;
    }

    draw() {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    movePlayer(key) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch (key) {
            case "ArrowUp":
                if (this.y > 0) {
                    this.y -= 25;
                }
            break;

            case "ArrowDown":
                if (this.y < 400) {
                    this.y += 25;
                }
            break;
        }
    } 
} 