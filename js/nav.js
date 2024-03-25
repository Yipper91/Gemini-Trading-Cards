let bgAnimation;
const bg = document.querySelector(".bg");
const bg_start = document.querySelector(".bg-start");
const start_container = document.querySelector(".start-container");
const num = document.querySelector(".score-container");
const rings = document.querySelector(".ring-collection");
const startBtn = document.querySelector(".start");
const pauseShow = document.querySelector(".pausebtn");

startBtn.addEventListener("click", startGame, false);

function startGame() {
    bg.style.animation = "moveBG 2s linear infinite";
    num.style.animation = "score-move 15s linear infinite";
    rings.style.animation = "rings 3s linear infinite";
    bg_start.style.opacity = "0%";
    start_container.style.opacity = "0%";
    pauseShow.style.opacity = "100%";
    sonic_container.style.opacity = "100%";
    sonic_img.style.marginRight = "0vh";
    sonic_gem.style.opacity = "0%";
    startBtn.style.opacity = "0%";
}