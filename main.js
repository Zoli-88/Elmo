document.addEventListener("mousemove", moveEyes);
const pupils = document.querySelectorAll(".pupils");
const eyeContainer = document.querySelector(".eyes");
const eyeWidth = eyeContainer.offsetWidth;
const eyeHeight = eyeContainer.offsetHeight;
const eyeCenterX = eyeContainer.offsetLeft + eyeWidth / 2;
const eyeCenterY = eyeContainer.offsetTop + eyeHeight / 2;
const offset = 100;

function moveEyes(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const xDistance = mouseX - eyeCenterX;
    const xMaxDistance = eyeWidth / 2 + offset;
    const yDistance = mouseY - eyeCenterY;
    const yMaxDistance = eyeHeight / 2 + offset;

    const xPercentage = Math.min(Math.max(xDistance / xMaxDistance, -1), 1);
    const yPercentage = Math.min(Math.max(yDistance / yMaxDistance, -1), 1);

    pupils.forEach((pupil) => {
        pupil.style.transform = `translate(${xPercentage * 10}px, ${yPercentage * 10}px)`;
    });
}
