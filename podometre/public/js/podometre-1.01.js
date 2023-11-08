/**
 * podometre-1.01.js
 * ===========================
 * 11/2023
 */

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

let stepCount = 0;
let isWalking = false;

// Event listner for divice motion
window.addEventListener('deviceorientation', (event) => {
    // de l'événement deviceorientation donne l'inclinaison avant-arrière du périphérique
    const tilt = event.beta;

    // For adjust the threshold
    const tiltThreshold = 45;

    // If the total acceleration exceeds the threshold, count a step
    if (tilt > tiltThreshold && !isWalking) {
        isWalking = true;
        stepCount++;
        document.getElementById('stepCount').innerText = stepCount;
    } else if (tilt < tiltThreshold) {
        isWalking = false;
    }
});