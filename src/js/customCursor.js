document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");

    if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
        cursor.style.display = "none";
        return;
    }
    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out",
        });
    });
});