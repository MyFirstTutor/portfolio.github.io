document.addEventListener('DOMContentLoaded', () => {
    // 1. Footer Year Update
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to open/close menu
    const toggleMenu = () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        // Add/remove an active class on the toggle button for a potential animated icon (optional)
        menuToggle.classList.toggle('is-active'); 
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked (for single-page navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Only hide if the menu is visible (i.e., on mobile)
            if (window.innerWidth <= 768) {
                toggleMenu(); 
            }
        });
    });

    // 3. Simple Form Status (Requires formspree setup)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            formStatus.textContent = "Sending...";
            formStatus.style.backgroundColor = '#fff3cd'; // Yellow light

            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: new FormData(contactForm),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = "Thank you! Your message has been sent successfully.";
                formStatus.style.backgroundColor = '#d4edda'; // Green light
                contactForm.reset();
            } else {
                formStatus.textContent = "Oops! There was an error sending your message.";
                formStatus.style.backgroundColor = '#f8d7da'; // Red light
            }
        });
    }
});