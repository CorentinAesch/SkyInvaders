const spaceCanvas = document.getElementById("canvas");
const context = spaceCanvas.getContext("2d");


document.getElementById("game-board").style.display = "none";
document.getElementById("start-button").onclick = () => {
  document.getElementById("game-board").style.display = "flex";
  startGame();
} 


let currentGame;

function startGame() {
    currentGame = new Game();
    let currentPlayer = new player();
    currentGame.player = currentPlayer;
    currentGame.player.draw();
    cancelAnimationFrame(currentGame.animationId);
    updateCanvas();
}

function detectCollision(obstacle) {
    if (currentGame.player.x < obstacle.x + obstacle.width  &&
        currentGame.player.x + currentGame.player.width > obstacle.x &&
        currentGame.player.y < obstacle.y + obstacle.height &&
        currentGame.player.y + currentGame.player.height > obstacle.y) {
        return true; 
    } else false;
}

/* function bulletFired() {
    const playerGunY = currentGame.player.height/2 - currentGame.bulletsArr.height/2;
    const newBullet = new bullet(playerGunY);
} */

function updateCanvas() {
    context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
    currentGame.player.draw();
    currentGame.obstaclesFrequency++;

    //Nouveaux obstacles
    if (currentGame.obstaclesFrequency % 100 === 1) { 
        const randomObstacleY = Math.floor(Math.random() * 1000);
        const newObstacle = new obstacle(randomObstacleY);
        
        currentGame.obstacles.push(newObstacle);     
    }

    //Déplacement obstacles
    currentGame.obstacles.forEach((obstacle) => {
        obstacle.x -= 5;
        obstacle.draw();
            
        //Collision
        if (detectCollision(obstacle) === true) {
            currentGame.gameOver = true;
            currentGame.obstaclesFrequency = 0;
            currentGame.score = 0;
            currentGame.obstacles = [];
            document.getElementById("game-board").style.display = "none";
            cancelAnimationFrame(currentGame.animationId);
            alert("Try again");   
        }
    });

    currentGame.bulletsArr.forEach((bullet) => {
        bullet.draw();
    })

    currentGame.animationId = requestAnimationFrame(updateCanvas);
}

window.addEventListener("keydown", (keyboardEvent) => {
    switch (keyboardEvent.key) {
        case "c": 
            currentGame.createBullet();
        break;
    }
        
    currentGame.player.movePlayer(keyboardEvent.key);
});
