const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let Ellapsedtime = 0;
let isRunning = false;

function Start() {
    if (!isRunning) {
        startTime = Date.now() - Ellapsedtime;
        timer = setInterval(update, 10);
        isRunning = true;

    }
}
function Stop() {
    if (isRunning) {
        clearInterval(timer);
        Ellapsedtime = Date.now() - startTime;
        isRunning = false;
    }
}
function Reset() {
    clearInterval(timer);
     startTime = 0;
     Ellapsedtime = 0;
    isRunning = false;
    display.innerHTML="00:00:00:00";
  
}

function update() {
    const currentTime = Date.now();
    Ellapsedtime = currentTime - startTime;
    let hours = Math.floor(Ellapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor(Ellapsedtime / (1000 * 60) % 60);
    let seconds = Math.floor(Ellapsedtime / (1000) % 60);
    let milliseconds = Math.floor(Ellapsedtime % 1000 / (10));
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    display.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`
}