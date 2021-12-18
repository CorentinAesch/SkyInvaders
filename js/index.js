const spaceCanvas = document.getElementById("canvas");
const context = spaceCanvas.getContext("2d");
canvas.width = 1300;
canvas.height = 600;

//Parameter Variables

const playerWidth = 75;
const playerHeight = 50;
const playerSpeed = 25;
const playerHealth = 100;

const ennemyWidth = 75;
const ennemyHeight = 50;
const ennemySpeed = Math.random() * 0.2 + 0.4;

const bulletWidth = 30;
const bulletHeight = 15;
let bulletPower = 20;
const bulletSpeed = 20;

const fireWidth = 270;
const fireHeight = 85;


//Game variables

let player = {};
let explosions = [];
let fires = [];
let ennemies = [];
let bullets = [];
let score = 0;
let gameOver = false;
let ennemiesFrequency = 0;
let requestAnimationId = null;

let exImg = new Image();
exImg.src = "/Images/PLanegamecomplete2dgameassetpack--115i4a6j439t9i112e/explosion-sprite-sheet.png";

let fireImg = new Image();
fireImg.src = "/Images/PLanegamecomplete2dgameassetpack--115i4a6j439t9i112e/planes/torpedo/Taille_personnalisée-removebg-preview.png";


// Functions for classes

window.addEventListener("keydown", (e) => {
    handlePlayer(e.key);
});

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

        case "ArrowRight":
            if (player.x < canvas.width - playerWidth) {
                player.x += playerSpeed;
            }
        break;

        case "ArrowLeft":
            if (player.x > 0) {
                player.x -= playerSpeed;
            }
        break;
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
    let bulletX = player.x + (playerWidth - bulletWidth);
    let bulletY = (player.y + (playerHeight/2)) - bulletHeight/2;
    bullets.push(new Bullet(bulletX, bulletY));
}

function handleBullets(){
    console.log(bullets);
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].move();
        bullets[i].draw();
        //bullets[i].fire();
        for (let j = 0; j < ennemies.length; j++) {
            if (bullets[i] && ennemies[j].health > 0 && detectCollision(bullets[i], ennemies[j]) === true) {
                bullets.splice(i, 1);
                ennemies[j].health -= bulletPower;
                score = score + bulletPower;
                i--;
            } 
            if (ennemies[j].health <= 0) {
                explosions.push(new Explosion(ennemies[j].x + ennemies[j].width/2, ennemies[j].y + ennemies[j].height/2, exImg));
                ennemies.splice(j, 1); 
                j--;
            } 
        }
        if (bullets[i] && bullets[i].x > canvas.width) {
            bullets.splice(i, 1);
            i --;
        }
    }
}

function handleFires() {
    for(let i=0; i < fires.length; i++){
        fires[i].animate();
    }
}

function handleExplosions(){
    for(let i=0; i < explosions.length; i++){
        explosions[i].animate();
        if(explosions[i].isFinished){
            explosions.splice(i,1);
        }
    }
}

function handleEnnemies() {
    for (let i = 0; i < ennemies.length; i++) {
        ennemies[i].move();
        ennemies[i].draw();
        if (ennemies[i].x < 0 || detectCollision(ennemies[i], player)) {
            gameOver = true;
        }
    }
    if (ennemiesFrequency % 200 === 0) { 
        let verticalPosition = Math.floor((Math.random() * (10 - 0) + 0 )) * ennemyHeight;
        ennemies.push(new Ennemy(verticalPosition));
    }
    if (score % 100 === 0) {
        ennemiesFrequency * 2;
    }
}

// Game functions

window.addEventListener('load', (e) => {
    document.getElementById("game-board").style.display = "none";
    document.querySelector("#game-intro").style.display = "flex";
});

document.getElementById("start-button").onclick = () => {
    document.getElementById("game-board").style.display = "flex";
    document.querySelector("#game-intro").style.display = "none";
    player = new Player();
    animate();
};

window.addEventListener("keydown", (keyboardEvent) => {
    if (gameOver && keyboardEvent.key === "Enter") {
            restart();
            player = new Player();
            animate();
    }
});

function HandleGameStatus() {
    player.draw();
    context.fillStyle = "grey";
    context.font = "50px Montserrat", 
    context.fillText("Score : " + score, 20, 50);

    if (gameOver) {
        context.fillStyle = 'grey';
        context.font = '60px Montserrat';
        context.fillText('GAME OVER', 430, 200);
        context.fillText('SCORE: ' + score, 480, 280);
        context.fillText('Press Enter to try again', 300, 400);
        player = {};
        ennemies = [];
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    handlePlayer();
    handleBullets();
    handleEnnemies();
    HandleGameStatus();
    handleExplosions();
    handleFires();
    ennemiesFrequency++;
    if (!gameOver) requestAnimationId = requestAnimationFrame(animate);
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

function restart() {
    player = {};
    ennemies = [];
    bullets = [];
    score = 0;
    gameOver = false;
    ennemiesFrequency = 0;
    cancelAnimationFrame(requestAnimationId);
}