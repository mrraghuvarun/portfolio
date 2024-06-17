document.addEventListener("DOMContentLoaded", function() {
    const circleText = document.getElementById("circle-text");
    const text = "Cloud Enthusiast • Full Stack Developer • ";
    const characters = text.split("");

    characters.forEach((char, index) => {
        const span = document.createElement("span");
        span.innerText = char;
        const angle = (index / characters.length) * 360;
        span.style.transform = `rotate(${angle}deg)`;
        circleText.appendChild(span);
    });
});
