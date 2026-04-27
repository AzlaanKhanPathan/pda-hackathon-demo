/* ========================================
   MAIN JAVASCRIPT FILE
   Global utilities and navigation logic
   ======================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    console.log('Karnataka Heritage Website Loaded');
});

/* ========================================
   MOBILE NAVIGATION
   ======================================== */

function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Toggle mobile menu
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

/* ========================================
   SMOOTH SCROLLING
   ======================================== */

function initSmoothScroll() {
    // Select all links that start with #
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ========================================
   SCROLL ANIMATIONS
   Fade in elements as they come into view
   ======================================== */

function initScrollAnimations() {
    // Observe elements for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards
    const cards = document.querySelectorAll('.destination-card, .culture-item');
    cards.forEach(card => observer.observe(card));
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Show loading spinner
function showLoading(element) {
    element.innerHTML = '<div class="spinner">Loading...</div>';
}

// Hide loading spinner
function hideLoading(element) {
    const spinner = element.querySelector('.spinner');
    if (spinner) spinner.remove();
}

// Format date helper
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
}