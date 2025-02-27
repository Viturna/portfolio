document.addEventListener("DOMContentLoaded", function () {
    let loaderText = document.querySelector(".loader-title");
    let svgElement = document.querySelector(".loader svg");
    let baseText = "Chargement";
    let dots = "";

    // Animation des "..."
    setInterval(() => {
        dots = dots.length < 3 ? dots + "." : "";
        loaderText.innerHTML = baseText + dots;
    }, 500);

    // Animation du clignotement du SVG avec GSAP
    gsap.to(svgElement, {
        opacity: 0.3,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});

// Disparition du loader après chargement
window.addEventListener("load", () => {
    let loader = document.querySelector(".loader"); // Sélection du loader
    if (loader) {
        gsap.to(loader, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => loader.remove()
        });
    }
});
