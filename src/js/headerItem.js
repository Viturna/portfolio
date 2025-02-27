// Sélectionne tous les éléments svg dans le menu
const arrows = document.querySelectorAll('.stagger-link svg');

arrows.forEach(arrow => {
    // Animation au survol
    arrow.parentElement.addEventListener('mouseenter', () => {
        gsap.to(arrow, {
            opacity: 1,   // Rend la flèche visible
            x: "0%",         // Remet la flèche à sa position d'origine
            duration: 0.4, // Durée de l'animation
            ease: 'power1.out' // Easing de l'animation
        });
    });

    // Animation au départ du survol
    arrow.parentElement.addEventListener('mouseleave', () => {
        gsap.to(arrow, {
            opacity: 0,  // Cache la flèche
            x: "-100%",       // Décale la flèche comme au début
            duration: 0.4, // Durée de l'animation
            ease: 'power1.in' // Easing de l'animation
        });
    });
});
