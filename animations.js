document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Function to apply staggered delays
    const staggerChildren = (containerSelector, itemSelector) => {
        const containers = document.querySelectorAll(containerSelector);
        containers.forEach(container => {
            const items = container.querySelectorAll(itemSelector);
            items.forEach((item, index) => {
                item.style.transitionDelay = `${index * 100}ms`;
            });
        });
    };

    staggerChildren('.feature-grid', '.feature-card');
    staggerChildren('.monetization-grid', '.monetization-card');
    staggerChildren('.timeline-container', '.timeline-item');
});
