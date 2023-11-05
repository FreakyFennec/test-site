/**
 * script-ping-pong-1.06.js
 * ===========================
 * 10/2023
 */

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Variables for "Yes" and "No" buttuns


// Draw start button
function startButton() {
    // Colors
    let backgroundColor = "grey";
    let buttonColor = "#0095DD";

    function popupChoice() {
    // Background popup choice
        const buttonWidth = 250;
        const buttonHeight = 130;
        const x = (canvas.width - buttonWidth) / 2;
        const y = (canvas.height - buttonHeight) / 2;
        const radiusCorner = 10;

        ctx.beginPath();
        ctx.moveTo(x + radiusCorner, y);
        ctx.lineTo(x + buttonWidth - radiusCorner, y);
        ctx.arcTo(x + buttonWidth, y, x + buttonWidth, y + radiusCorner, radiusCorner);
        ctx.lineTo(x + buttonWidth, y + buttonHeight - radiusCorner);
        ctx.arcTo(x + buttonWidth, y + buttonHeight, x + buttonWidth - radiusCorner, y + buttonHeight, radiusCorner);
        ctx.lineTo(x + radiusCorner, y + buttonHeight);
        ctx.arcTo(x, y + buttonHeight, x, y + buttonHeight - radiusCorner, radiusCorner);
        ctx.lineTo(x, y + radiusCorner);
        ctx.arcTo(x, y, x + radiusCorner, y, radiusCorner);

        ctx.fillStyle = backgroundColor;
        ctx.fill();

        ctx.strokeStyle = 'grey';
        ctx.lineWidth = 1;
        ctx.stroke();

    // Text popup choice
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const buttonText = "Again ?";
        ctx.fillText(buttonText, x + buttonWidth / 2, y + buttonHeight / 4);
    }
    popupChoice();

    function buttonYes() {
    // Background button Yes
        const buttonWidth = 100;
        const buttonHeight = 50;
        const x = (canvas.width - buttonWidth) / 3.7;
        const y = (canvas.height - buttonHeight) / 1.8;
        const radiusCorner = 10;

        ctx.beginPath();
        ctx.moveTo(x + radiusCorner, y);
        ctx.lineTo(x + buttonWidth - radiusCorner, y);
        ctx.arcTo(x + buttonWidth, y, x + buttonWidth, y + radiusCorner, radiusCorner);
        ctx.lineTo(x + buttonWidth, y + buttonHeight - radiusCorner);
        ctx.arcTo(x + buttonWidth, y + buttonHeight, x + buttonWidth - radiusCorner, y + buttonHeight, radiusCorner);
        ctx.lineTo(x + radiusCorner, y + buttonHeight);
        ctx.arcTo(x, y + buttonHeight, x, y + buttonHeight - radiusCorner, radiusCorner);
        ctx.lineTo(x, y + radiusCorner);
        ctx.arcTo(x, y, x + radiusCorner, y, radiusCorner);

        ctx.fillStyle = buttonColor;
        ctx.fill();

        ctx.strokeStyle = 'grey';
        ctx.lineWidth = 1;
        ctx.stroke();

    // Text button Yes
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const buttonText = "Yes";
        ctx.fillText(buttonText, x + buttonWidth / 2, y + buttonHeight / 2);
    }
    buttonYes();

    function buttonNo() {
    // Background button No
        const buttonWidth = 100;
        const buttonHeight = 50;
        const x = (canvas.width - buttonWidth) / 1.35;
        const y = (canvas.height - buttonHeight) / 1.8;
        const radiusCorner = 10;

        ctx.beginPath();
        ctx.moveTo(x + radiusCorner, y);
        ctx.lineTo(x + buttonWidth - radiusCorner, y);
        ctx.arcTo(x + buttonWidth, y, x + buttonWidth, y + radiusCorner, radiusCorner);
        ctx.lineTo(x + buttonWidth, y + buttonHeight - radiusCorner);
        ctx.arcTo(x + buttonWidth, y + buttonHeight, x + buttonWidth - radiusCorner, y + buttonHeight, radiusCorner);
        ctx.lineTo(x + radiusCorner, y + buttonHeight);
        ctx.arcTo(x, y + buttonHeight, x, y + buttonHeight - radiusCorner, radiusCorner);
        ctx.lineTo(x, y + radiusCorner);
        ctx.arcTo(x, y, x + radiusCorner, y, radiusCorner);

        ctx.fillStyle = buttonColor;
        ctx.fill();

        ctx.strokeStyle = 'grey';
        ctx.lineWidth = 1;
        ctx.stroke();

    // Text button No
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const buttonText = "No";
        ctx.fillText(buttonText, x + buttonWidth / 2, y + buttonHeight / 2);
    }
    buttonNo();
}

// Définir les propriétés du jeu
const paddleWidth = 100;
const paddleHeight = 10;
const paddleSpeed = 5;
const ballRadius = 10;
let paddleX = (canvas.width - paddleWidth) / 2;
let ballX = canvas.width / 2;
let ballY = canvas.height - paddleHeight - ballRadius;
let ballSpeedX = 5;
let ballSpeedY = -5;

// Fonction pour dessiner la raquette
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Fonction pour dessiner la balle
function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

let gameStarted = false;
let animationID;
let score = 0;

// Display score
function drawScore(){
    ctx.font = "20px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("Score: " + score, canvas.width / 2, 10);
}

// Function play sound when ball bouncing on paddle
function playPaddleSound() {
    const audio = new Audio(`public/sound/muteHiConga.wav`);
    audio.play();
}

// Function who manage the click on the start button
function startGame() {
    paddleX = (canvas.width - paddleWidth) / 2;
    ballX = canvas.width / 2;
    ballY = canvas.height - paddleHeight - ballRadius;
    ballSpeedX = 5;
    ballSpeedY = -5;

    score = 0; // Reset the score

    gameStarted = true; // Le jeu a commencé
    animationID = requestAnimationFrame(updateGameArea);
}

// Fonction de mise à jour du jeu
function updateGameArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas

    drawPaddle();
    drawBall();
    drawScore();

    // Déplacer la raquette avec les touches gauche et droite
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += paddleSpeed;
    }
    if (leftPressed && paddleX > 0) {
        paddleX -= paddleSpeed;
    }

    // Mettre à jour la position de la balle
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Rebond de la balle sur les bords du canvas
    if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) {
        ballSpeedX = -ballSpeedX;
    }

    // Rebond de la balle sur le bord supérieur
    if (ballY - ballRadius < 0) {
        ballSpeedY = -ballSpeedY;
        score++; // Incrémente le score
        // Effet sonore ou autre animation
    }

  // Rebond de la balle sur la raquette
    if (ballY + ballRadius > canvas.height - paddleHeight && ballX > paddleX && ballX < paddleX + paddleWidth) {
        ballSpeedY = -ballSpeedY;
        playPaddleSound();
    }

    // Si la balle tombe en bas, le jeu est terminé
    if (ballY + ballRadius > canvas.height) {

        // Arrêtez la mise à jour du jeu pour empêcher le redémarrage automatique
        cancelAnimationFrame(animationID); // Assurez-vous de stocker l'ID de l'animation dans une variable globale
        startButton();
        gameStarted = false;
    } else {
        // Appeler la fonction updateGameArea à chaque frame
        requestAnimationFrame(updateGameArea);
    }
}

// Gestion des touches
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", (e) => {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
});

// Gestion du contrôle tactile
let touchStartX = 0;

canvas.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

canvas.addEventListener("touchmove", (e) => {
    const touchCurrentX = e.touches[0].clientX;
    const touchDeltaX = touchCurrentX - touchStartX;

    if (touchDeltaX  < 0 && paddleX > 0) {
        paddleX -= paddleSpeed;
    } else if (touchDeltaX > 0 && paddleX < canvas.width - paddleWidth) {
        paddleX += paddleSpeed;
    }

    touchStartX = touchCurrentX;
});

// Managing buttons
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const buttonWidth = 100;
    const buttonHeight = 50;
    const buttonXYes = (canvas.width - buttonWidth) / 3.7;
    const buttonYYes = (canvas.height - buttonHeight) / 1.8;
    const buttonXNo = (canvas.width - buttonWidth) / 1.35;
    const buttonYNo = (canvas.height - buttonHeight) / 1.8;

    if (x >= buttonXYes && x <= buttonXYes + buttonWidth && y >= buttonYYes && y <= buttonYYes + buttonHeight) {

        startGame();

    } else if (x >= buttonXNo && x <= buttonXNo + buttonWidth && y >= buttonYYes && y <= buttonYYes + buttonHeight) {

        window.location.href = "../../../index.html";

    }
});
startButton();