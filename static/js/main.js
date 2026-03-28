// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cursor Personalizado
    const cursor = document.querySelector('.custom-cursor');
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out"
        });
    });

    // Efecto de cursor sobre links
    const links = document.querySelectorAll('a, .grid-item');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            gsap.to(cursor, { scale: 4, duration: 0.3 });
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            gsap.to(cursor, { scale: 1, duration: 0.3 });
        });
    });

    // 2. Smooth Scroll (Opcional si usás librerías como Lenis)
    console.log("Portfolio 2026 - Cargado correctamente");
});
