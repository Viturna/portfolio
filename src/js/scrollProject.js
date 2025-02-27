// Initialisation de GSAP et ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation de scroll horizontal
let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1), // Scroll horizontal
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true, // Fixe le conteneur pour un scroll horizontal
        scrub: 1,
        snap: 1 / (sections.length - 1), // S'accroche aux sections
        end: () => "+=" + document.querySelector(".container").offsetWidth // Fin après largeur totale du conteneur
    }
});

// Animation des spans avec un déclencheur arbitraire
const spans = document.querySelectorAll(".title-container span");

// Fonction pour réinitialiser tous les spans
function resetSpans() {
    spans.forEach((span) => {
        gsap.to(span, { backgroundColor: "transparent", duration: 0.5 });
    });
}

// Définir un ScrollTrigger pour chaque span
spans.forEach((span, index) => {
    // Récupérer la couleur définie par la classe CSS
    const spanColor = getComputedStyle(span).getPropertyValue("--span-bg-color") || "#ffffff";

    ScrollTrigger.create({
        trigger: span,
        start: "top 80%", // Début de l'animation pour chaque span
        end: "top 50%",
        scrub: 1, // Animation fluide synchronisée avec le scroll
        onEnter: () => {
            // Réinitialiser tous les autres spans
            resetSpans();

            // Appliquer la couleur au span actuel
            gsap.to(span, { backgroundColor: spanColor.trim(), duration: 0.5 });
        },
        onLeaveBack: () => {
            // Lorsqu'on descend en arrière, réinitialiser le span
            gsap.to(span, { backgroundColor: "transparent", duration: 0.5 });
        },
    });
});
