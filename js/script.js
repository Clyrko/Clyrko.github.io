document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });
    
    // Simple mobile menu toggle (we'll add the HTML for this)
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Add animation to project cards when they come into view
    const projectCards = document.querySelectorAll('.project-card');
    
    const observeElements = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(observeElements, {
        root: null,
        threshold: 0.1
    });
    
    projectCards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
});