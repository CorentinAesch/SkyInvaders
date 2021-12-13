const spaceCanvas = document.getElementById("canvas");
const context = spaceCanvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;

const scoreBarHeight = 100;

const playerWidth = 50;
const playerHeight = 50;
const playerSpeed = 25;
const playerHealth = 100;

const ennemyWidth = 75;
const ennemyHeight = 75;
const ennemySpeed = Math.random() * 0.2 + 0.4;

const bulletWidth = 10;
const bulletHeight = 5;
const bulletPower = 20;
const bulletSpeed = 20;



//Global variables

let player = {};

const ennemies = [];
const bullets = [];
const score = 0;
let gameOver = false;
let ennemiesFrequency = 0;

const scoreBar = {
    width: canvas.width,
    height: scoreBarHeight,
}


//Game Board

function handlePlayer(key) {
    context.clearRect(player.x, player.y, player.width, player.height);
    switch (key) {
        case "ArrowUp":
            if (player.y > 0) {
                player.y -= playerSpeed;
            }
        break;

        case "ArrowDown":
            if (player.y < canvas.height - playerHeight) {
                player.y += playerSpeed;
            }
        break;
    }
}

window.addEventListener("keydown", (e) => {
    handlePlayer(e.key);
});

function handleBullets(){
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].move();
        bullets[i].draw();

        for (let j = 0; j < ennemies.length; j++) {
            if (bullets[i] && ennemies[i].health > 0 && detectCollision(bullets[i], ennemies[j]) === true) {
                bullets.splice(i, 1);
                ennemies[j].health -= bulletPower;
                i--;
            } else {
                ennemies.splice(j, 1);   //<-- Probleme
                score = score + 100; 
                j--;
            }
        }
        if (bullets[i] && bullets[i].x > canvas.width) {
            bullets.splice(i, 1);
            i --;
        }
    }
}

window.addEventListener("keydown", (keyboardEvent) => {
    switch (keyboardEvent.key) {
        case "c": 
            shootBullet();
        break;
    }
});

function shootBullet() {
    let bulletX = (playerWidth - bulletWidth);
    let bulletY = (player.y + (playerHeight/2)) - bulletHeight/2;
    bullets.push(new Bullet(bulletX, bulletY));
}

function handleEnnemies() {
    for (let i = 0; i < ennemies.length; i++) {
        ennemies[i].move();
        ennemies[i].draw();
        if (ennemies[i].x < 0 || detectCollision(ennemies[i], player)) {
            gameOver = true;
        }
    }
    if (ennemiesFrequency % 100 === 1) { 
        let verticalPosition = Math.floor((Math.random() * 8 + 0 ) * ennemyHeight);
        ennemies.push(new Ennemy(verticalPosition));
    }
}


document.getElementById("game-board").style.display = "none";
document.getElementById("start-button").onclick = () => {
  document.getElementById("game-board").style.display = "flex";
  player = new Player();
  animate();
}

function HandleGameStatus() {
    player.draw();
    context.fillStyle = "gold";
    context.font = "30px Orbitron", 
    context.fillText("Score : " + score, 20, 40);

    if (gameOver) {
        context.fillStyle = 'black';
        context.font = '60px Orbitron';
        context.fillText('GAME OVER', 300, 250);
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "transparent";
    handlePlayer();
    handleBullets();
    handleEnnemies();
    HandleGameStatus();
    ennemiesFrequency++;
    if (!gameOver) requestAnimationFrame(animate);
}
animate();

function detectCollision(first, second) {
    if ( !(first.x > second.x + second.width  ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y) )
        { return true; 
    } else false;
}

