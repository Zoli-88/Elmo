
const pupils = document.querySelectorAll(".pupils");
const eyeContainer = document.querySelector(".eyes");
const eyeWidth = eyeContainer.offsetWidth;
const eyeHeight = eyeContainer.offsetHeight;
const eyeCenterX = eyeContainer.offsetLeft + eyeWidth / 2;
const eyeCenterY = eyeContainer.offsetTop + eyeHeight / 2;
const offset = 0.7;

function moveEyes(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const xDistance = mouseX - eyeCenterX;
    const xMaxDistance = eyeWidth / 2;
    const yDistance = mouseY - eyeCenterY;
    const yMaxDistance = eyeHeight / 2;

    const xPercentage = Math.min(Math.max(xDistance / xMaxDistance, -1), 1);
    const yPercentage = Math.min(Math.max(yDistance / yMaxDistance, -1), 1);

    pupils.forEach((pupil) => {
        pupil.style.transform = `translate(${xPercentage * 10 * offset}px, ${yPercentage * 10 * offset}px)`;
    });
}

function lookStraight() {
    pupils.forEach((pupil) => {
        pupil.style.transform = `translate(0, 0)`;
    });
}

document.addEventListener("mousemove", moveEyes);
document.addEventListener("mouseleave", lookStraight);
