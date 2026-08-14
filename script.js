// Smooth scroll to the memories section
function scrollToMemories() {
    document
        .querySelector(".gallery-section")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// Create floating hearts ❤️
const heartSymbols = ["❤️", "💕", "💗", "💖", "💘"];

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";

    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 10000);
}


// Make a new heart every 700 milliseconds
setInterval(createHeart, 700);