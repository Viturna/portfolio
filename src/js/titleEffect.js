document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll("h2");

    headers.forEach((header) => {
        const text = header.innerText;
        header.innerHTML = "";

        text.split("").forEach((char) => {
            const span = document.createElement("span");
            span.innerText = char;
            header.appendChild(span);
        });

        const letters = header.querySelectorAll("span");

        gsap.fromTo(
            letters,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: header,
                    start: "top 80%",
                },
            }
        );
    });
});
