document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Footer: Update Current Year
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        // Set the text content to the current year
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 2. Header: Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'nav-open' class on the navigation container
            nav.classList.toggle('nav-open');
            // Toggle 'is-active' class on the menu button for animation/icon change
            menuToggle.classList.toggle('is-active');
        });

        // Close menu when a navigation link is clicked (important for single-page sites)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is open before trying to close it
                if (nav.classList.contains('nav-open')) {
                    nav.classList.remove('nav-open');
                    menuToggle.classList.remove('is-active');
                }
            });
        });
    }

    // 3. Contact Form Status (Simple feedback before Netlify takes over)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', () => {
            // Provide immediate user feedback that the submission is in progress.
            // Netlify will handle the actual data transmission and the success/error page redirect.
            formStatus.textContent = 'Submitting your inquiry...';
            formStatus.style.color = '#1a73e8'; // Blue color to indicate processing
            
            // Note: Netlify requires no custom fetch/AJAX here. The browser submits 
            // the form directly to Netlify's endpoint via the standard POST method.
        });
    }
});