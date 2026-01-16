/**
 * Modern Portfolio Enhancements
 * Apple-style smooth animations and interactions
 */

(function() {
    'use strict';

    // Smooth reveal animations on scroll
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.posts article, .post.featured');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        reveals.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(element);
        });
    }

    // Parallax effect for hero section
    function parallaxEffect() {
        const intro = document.getElementById('intro');
        if (!intro) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            intro.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            intro.style.opacity = 1 - (scrolled / 500);
        });
    }

    // Enhanced hover effects for project cards
    function enhanceCardHovers() {
        const cards = document.querySelectorAll('.posts article');

        cards.forEach(card => {
            card.addEventListener('mouseenter', function(e) {
                this.style.transform = 'translateY(-8px) scale(1.01)';
            });

            card.addEventListener('mouseleave', function(e) {
                this.style.transform = 'translateY(0) scale(1)';
            });

            // Add subtle tilt effect
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                this.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    // Smooth scroll with offset for header
    function smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Add loading animation
    function initLoadingAnimation() {
        window.addEventListener('load', () => {
            document.body.classList.remove('is-preload');

            // Animate intro
            const intro = document.getElementById('intro');
            if (intro) {
                intro.style.opacity = '0';
                intro.style.transform = 'translateY(50px)';

                setTimeout(() => {
                    intro.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                    intro.style.opacity = '1';
                    intro.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }

    // Enhanced image loading with fade-in
    function lazyLoadImages() {
        const images = document.querySelectorAll('img');

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.6s ease-in-out';

                    img.onload = () => {
                        img.style.opacity = '1';
                    };

                    if (img.complete) {
                        img.style.opacity = '1';
                    }

                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Add ripple effect to buttons
    function addRippleEffect() {
        const buttons = document.querySelectorAll('.button');

        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                const rippleContainer = this.querySelector('.ripple');
                if (rippleContainer) {
                    rippleContainer.remove();
                }

                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Navbar background on scroll
    function navbarScroll() {
        const header = document.getElementById('header');
        const nav = document.getElementById('nav');

        if (!header || !nav) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.1)';
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.8)';
                header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                nav.style.background = 'rgba(255, 255, 255, 0.8)';
            }
        });
    }

    // Initialize all enhancements
    function init() {
        initLoadingAnimation();
        revealOnScroll();
        parallaxEffect();
        enhanceCardHovers();
        smoothScroll();
        lazyLoadImages();
        addRippleEffect();
        navbarScroll();
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
