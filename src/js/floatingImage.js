document.addEventListener('DOMContentLoaded', () => {
    const floatingImage = document.getElementById('floating-image');

    // Suivi de la souris
    document.addEventListener('mousemove', (event) => {
        floatingImage.style.left = `${event.clientX}px`;
        floatingImage.style.top = `${event.clientY}px`;
    });

    // Survol des liens
    const links = document.querySelectorAll('.inner-project-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const imageSrc = link.getAttribute('data-image');
            floatingImage.style.backgroundImage = `url(${imageSrc})`;
            floatingImage.style.opacity = '1';
            floatingImage.style.transform = 'translate(-50%, -50%) scale(1)';
        });
        link.addEventListener('mouseleave', () => {
            floatingImage.style.opacity = '0';
            floatingImage.style.transform = 'translate(-50%, -50%) scale(0.9)';
        });
    });
});