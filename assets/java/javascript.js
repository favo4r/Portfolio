const imageSection = document.querySelector(".hero-imgs");
const brightImage = document.querySelector(".bright");

window.addEventListener("scroll", () => {

    const rect = imageSection.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    // Calculate how much of the image section has entered the screen
    let progress = (windowHeight - rect.top) / windowHeight;

    // Keep value between 0 and 1
    progress = Math.min(Math.max(progress, 0), 1);

    brightImage.style.opacity = progress;

});