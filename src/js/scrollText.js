document.addEventListener("DOMContentLoaded", () => {
    // Split text into lines using SplitType
    const scrollTextElements = document.querySelectorAll('.scroll-text');

    scrollTextElements.forEach(text => {
        const splitText = new SplitType(text, { types: 'lines' });

        // Create an animation for each line
        const lines = text.querySelectorAll('.line');

        gsap.fromTo(
            lines,
            {
                y: 50, // Start position: below the text
                opacity: 0, // Start with no opacity
            },
            {
                y: 0, // End position: normal position
                opacity: 1, // Fully visible
                duration: 0.5,
                stagger: 0.1, // Stagger effect: Delay between each line
                ease: "power2.out", // Smooth easing
                scrollTrigger: {
                    trigger: text, // Trigger the animation when the text is visible
                    start: "top 70%", // Start the animation when the text reaches 80% of the viewport
                    end: "bottom 40%", // End the animation when the text reaches 20% from the bottom
                    scrub: true, // Smooth the animation along with the scroll
                    markers: false, // Optional: show markers for debugging
                }
            }
        );
    });
});
