// animations.js
gsap.registerPlugin(ScrollTrigger);

// 1. Aparición de los proyectos en la Home
gsap.from(".grid-item", {
    scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 80%", // Empieza cuando el grid llega al 80% del viewport
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2, // Los elementos aparecen uno tras otro
    ease: "power4.out"
});

// 2. Efecto Parallax en el Hero de los proyectos
if (document.querySelector('.project-hero')) {
    gsap.to(".project-hero", {
        scrollTrigger: {
            trigger: ".project-hero",
            start: "top top",
            end: "bottom top",
            scrub: true // La animación sigue el scroll
        },
        backgroundPositionY: "50%",
        ease: "none"
    });
}

// 3. Slider de Antes/Después (Para Fotomontajes)
function initBeforeAfterSlider() {
    const slider = document.querySelector('.slider-container');
    if (!slider) return;

    const dragLine = slider.querySelector('.drag-line');
    const beforeImg = slider.querySelector('.img-before');

    slider.addEventListener('mousemove', (e) => {
        let xPos = e.offsetX;
        let size = slider.offsetWidth;
        let percentage = (xPos / size) * 100;

        beforeImg.style.width = percentage + "%";
        dragLine.style.left = percentage + "%";
    });
}

initBeforeAfterSlider();