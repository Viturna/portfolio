document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.effect-btn');

    buttons.forEach(button => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        button.appendChild(circle);

        button.addEventListener('mouseenter', (e) => {
            const rect = button.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            gsap.set(circle, {
                width: "300%",
                height: "300%",
                x: mouseX - rect.width / 2,
                y: mouseY - rect.height / 2
            });

            gsap.to(circle, {
                scale: 1,
                duration: 1,
                ease: "power4.out",
            });

            button.classList.add('hovered');
        });

        button.addEventListener('mouseleave', () => {
            gsap.set(circle, {
                width: 0,
                height: 0,
            });

            gsap.to(circle, {
                scale: 0,
                duration: 0.8,
                ease: "power4.out",
            });

            button.classList.remove('hovered');
        });
    });
});
