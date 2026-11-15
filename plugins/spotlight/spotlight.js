const spotlightTimer = 500;
const spotlight = document.createElement('div');
spotlight.classList.add("spotlight");

let spotlightStatus = false;
let spotlightX = window.innerWidth / 2;
let spotlightY = window.innerHeight / 2;
let spotlightTimeout = null;
const spotlightDelta = 30;

const spotlightController = {
    top: false,
    right: false,
    bottom: false,
    left: false,
    show: false
}

window.slidesk.spotlightOn = () => {
    document.body.appendChild(spotlight);
}

window.slidesk.spotlightOff = () => {
    if (document.querySelector('.spotlight'))
        document.body.removeChild(spotlight);
}

window.slidesk.spotlightMove = (x, y) => {
    if (!spotlightStatus) return;
    spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, #00000000 var(--spotlight-innerRadius), var(--spotlight-color) var(--spotlight-outerRadius))`;
    spotlightX = x;
    spotlightY = y;
}

window.slidesk.spotlightMoveLeftUp = () => {
    spotlightController.left = false;
}
window.slidesk.spotlightMoveRightUp = () => {
    spotlightController.right = false;
}
window.slidesk.spotlightMoveTopUp = () => {
    spotlightController.top = false;
}
window.slidesk.spotlightMoveBottomUp = () => {
    spotlightController.bottom = false;
}
window.slidesk.spotlightShowUp = () => {
    spotlightController.show = false;
}
window.slidesk.spotlightMoveLeftDown = () => {
    spotlightController.left = true;
}
window.slidesk.spotlightMoveRightDown = () => {
    spotlightController.right = true;
}
window.slidesk.spotlightMoveTopDown = () => {
    spotlightController.top = true;
}
window.slidesk.spotlightMoveBottomDown = () => {
    spotlightController.bottom = true;
}
window.slidesk.spotlightShowDown = () => {
    spotlightController.show = true;
}

const spotlightHide = () => {
    window.slidesk.spotlightOff();
    spotlightStatus = false;
    spotlightTimeout = null;
};

document.addEventListener('mousemove', (event) => {
    clearTimeout(spotlightTimeout);
    spotlightTimeout = setTimeout(spotlightHide, spotlightTimer);
    spotlightStatus = true;
    window.slidesk.spotlightOn();
    window.slidesk.spotlightMove(event.clientX, event.clientY);
});

const spotlightLoop = () => {
    if (spotlightController.left) spotlightX -= spotlightDelta;
    if (spotlightController.right) spotlightX += spotlightDelta;
    if (spotlightController.top) spotlightY -= spotlightDelta;
    if (spotlightController.bottom) spotlightY += spotlightDelta;
    if (spotlightController.left || spotlightController.right || spotlightController.top || spotlightController.bottom || spotlightController.show) {
        if (!spotlightStatus) {
            spotlightStatus = true;
            window.slidesk.spotlightOn();
        }
        window.slidesk.spotlightMove(spotlightX, spotlightY);
    }
    // one pending off-timer, not one per frame
    else if (spotlightStatus && !spotlightTimeout) spotlightTimeout = setTimeout(spotlightHide, spotlightTimer);
    requestAnimationFrame(spotlightLoop);
}
requestAnimationFrame(spotlightLoop);
