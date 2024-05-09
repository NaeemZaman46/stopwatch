let startTime;
let elapsedTime = 0;
let timerInterval;

function startStop() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("display").textContent = "00:00:00";
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById("display").textContent = formattedTime;
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${pad(hours)}:${pad(remainingMinutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? "0" + number : number;
}

