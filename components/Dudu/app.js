const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
const grid = document.querySelector(".grid")
var squares;
let result = 0;
let targetPosition = null;JsGames
let currentTime = 60;
let countdownTimer;

for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}

squares = document.querySelectorAll(".square")

function randomSquare() {
    squares.forEach(function(square) {
        square.classList.remove('mole')
    })
    let randomNumber = Math.floor(Math.random() * 9);
    targetPosition = randomNumber;
    let randomSquare = squares[randomNumber];
    randomSquare.classList.add("mole")
}

randomSquare()

for (let i = 0; i < 9; i++) {
    squares[i].addEventListener('mousedown', function() {
        if (i === targetPosition) {
            result++
            score.textContent = result
            randomSquare()
        }
    })
}

function countdown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime == 0) {
        clearInterval(countdownTimer)
        alert("GAME OVER! Score: " + result)
    }
}

countdownTimer = setInterval(countdown, 1000)
