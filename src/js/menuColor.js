document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let header = document.querySelector(".top-header");

    ScrollTrigger.batch(".dark-bg", {
        start: "top 5%",
        end: "bottom 15%",
        onEnter: () => header.classList.add("header-white"),
        onLeaveBack: () => header.classList.remove("header-white"),
        onEnterBack: () => header.classList.add("header-white"),
        onLeave: () => header.classList.remove("header-white"),
    });
});