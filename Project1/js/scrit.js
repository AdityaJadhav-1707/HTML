// script.js

// Animate input placeholder on focus
const searchInput = document.querySelector('main section:first-of-type input');

searchInput.addEventListener('focus', () => {
    searchInput.style.border = "2px solid #ff3b30";
    searchInput.style.boxShadow = "0 0 20px rgba(255,59,48,0.5)";
});

searchInput.addEventListener('blur', () => {
    searchInput.style.border = "none";
    searchInput.style.boxShadow = "none";
});

// Smooth scroll animation for header links (if sections added)
const headerLinks = document.querySelectorAll('header ul li a');

headerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple fade-in animation for features on scroll
const features = document.querySelectorAll('.feature');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

features.forEach(feature => {
    feature.style.opacity = 0;
    feature.style.transform = "translateY(30px)";
    feature.style.transition = "all 0.8s ease-out";
    observer.observe(feature);
});
