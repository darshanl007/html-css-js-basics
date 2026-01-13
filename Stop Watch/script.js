let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let isRunning = false;

// Update Display
function updateDisplay() {
    let display = document.getElementById("display");
    display.innerText = `${pad(minutes)} : ${pad(seconds)} : ${pad(milliseconds)}`;
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}

// Update time values
function updateTime() {
    milliseconds++;

    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    updateDisplay();
}

// Start
function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 10);
    }
}

// Stop 
function stop() {
    clearInterval(timer);
    isRunning = false;
}

// Reset
function reset() {
    clearInterval(timer);
    isRunning = false;
    minutes = seconds = milliseconds = 0;
    updateDisplay();
}