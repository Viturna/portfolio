document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let header = document.querySelector(".top-header");

    ScrollTrigger.batch(".dark-bg", {
        start: "top 2%",
        end: "bottom 10%",
        onEnter: () => header.classList.add("header-white"),
        onLeaveBack: () => header.classList.remove("header-white"),
        onEnterBack: () => header.classList.add("header-white"),
        onLeave: () => header.classList.remove("header-white"),
    });
});