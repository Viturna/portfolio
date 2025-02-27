// Sélection des éléments
const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".stagger-link");

// Animation d'ouverture du menu
const openMenuAnimation = () => {
    gsap.set(menu, { display: "flex", autoAlpha: 0 });
    gsap.set(menuLinks, { opacity: 0, y: 20 });

    const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power3.out" } });

    tl.to(menu, { autoAlpha: 1 })
        .fromTo(
            ".open-menu",
            { x: "-100%" },
            { x: "0%", duration: 0.4, ease: "power3.inOut" },
            "<"
        )
        .to(
            menuLinks,
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
            },
            "-=0.4"
        );
};

const closeMenuAnimation = () => {
    const tl = gsap.timeline({
        defaults: { duration: 0.6, ease: "power3.inOut" },
        onComplete: () => gsap.set(menu, { display: "none" }),
    });

    tl.to(menuLinks, { opacity: 0, y: 20, stagger: -0.1 })
        .to(
            ".open-menu",
            { x: "-100%", duration: 0.8 },
            "<"
        )
        .to(menu, { autoAlpha: 0 }, "<");
};

// Écouteurs pour les boutons
openMenuButton.addEventListener("click", openMenuAnimation);
closeMenuButton.addEventListener("click", closeMenuAnimation);

// Ajout de l'événement sur chaque lien du menu
menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenuAnimation);
});
