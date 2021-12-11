class Game {
    constructor() {
      this.player = {};
      this.obstacles = [];
      this.bulletsArr = [];
      this.score = 0;
      this.obstaclesFrequency = 1;
      this.animationId = null;
      this.gameOver = false;
    }

    createBullet = () => {
      const newBullet = new bullet(100);
      this.bulletsArr.push(newBullet);
    }
  }