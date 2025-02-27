document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".link-project");

    links.forEach(link => {
        const line = document.createElement("div");
        line.style.position = "absolute";
        line.style.left = "0";
        line.style.bottom = "-3px";
        line.style.height = "2px";
        line.style.width = "0%";
        line.style.backgroundColor = "#424242";
        link.style.position = "relative";
        link.appendChild(line);

        link.addEventListener("mouseenter", () => {
            gsap.to(line, {
                width: "100%",
                duration: 0.4,
                ease: "power2.out"
            });
        });

        link.addEventListener("mouseleave", () => {
            gsap.to(line, {
                width: "0%",
                duration: 0.4,
                ease: "power2.out"
            });
        });
    });
});