// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Navigation
    nav.classList.toggle('active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Only apply smooth scrolling to internal page links
    if (anchor.getAttribute('href').startsWith('#')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

// Scroll Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about h2, .about-main, .skills, .contact h2, .contact-info, .info-item, .social-links');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Add animation class to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .about-content, .contact-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
window.addEventListener('load', animateOnScroll);

// Portfolio Items
const portfolioItems = [
    {
        title: 'Blog Content Strategy',
        description: 'Developed and executed a content strategy for a lifestyle blog, resulting in 200% increase in engagement.',
        image: 'https://via.placeholder.com/300x200'
    },
    {
        title: 'Social Media Campaign',
        description: 'Created engaging social media content for a fashion brand, growing their Instagram following by 50%.',
        image: 'https://via.placeholder.com/300x200'
    },
    {
        title: 'Brand Storytelling',
        description: 'Crafted compelling brand stories for a local business, helping them connect with their community.',
        image: 'https://via.placeholder.com/300x200'
    }
];

const portfolioGrid = document.querySelector('.portfolio-grid');
portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio-item';
    portfolioItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="portfolio-item-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;
    portfolioGrid.appendChild(portfolioItem);
});

// Debug for "See my Work" button
document.addEventListener('DOMContentLoaded', () => {
    const workButton = document.querySelector('.cta-button');
    if (workButton) {
        console.log('Work button found:', workButton.href);
        workButton.addEventListener('click', (e) => {
            console.log('Work button clicked');
        });
    } else {
        console.log('Work button not found');
    }
}); 