/**
 * Ultra-Modern Portfolio Interactions
 * Advanced animations and effects
 */

(function() {
    'use strict';

    // Scroll Progress Bar
    function initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Smooth Reveal Animations
    function initRevealAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

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
        }, observerOptions);

        // Observe elements
        const elements = document.querySelectorAll('.post.featured, .posts article');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });
    }

    // Advanced Card Hover Effects with Mouse Tracking
    function initCardEffects() {
        const cards = document.querySelectorAll('.posts article');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 25;
                const rotateY = (centerX - x) / 25;

                card.style.transform = `
                    translateY(-12px)
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                `;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    // Magnetic Buttons Effect
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.button');

        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) translateY(-2px)`;
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }

    // Parallax Effect for Hero Section
    function initParallax() {
        const intro = document.getElementById('intro');
        if (!intro) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.3;

            intro.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            intro.style.opacity = 1 - (scrolled / 600);
        });
    }

    // Cursor Follow Effect
    function initCursorEffect() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
        document.body.appendChild(cursor);

        const cursorDot = cursor.querySelector('.cursor-dot');
        const cursorRing = cursor.querySelector('.cursor-ring');

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        function animate() {
            const speed = 0.15;
            ringX += (mouseX - ringX) * speed;
            ringY += (mouseY - ringY) * speed;

            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';

            requestAnimationFrame(animate);
        }
        animate();

        // Expand cursor on hover
        const interactives = document.querySelectorAll('a, button, .button');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    }

    // Typing Effect for Hero Text
    function initTypingEffect() {
        const heroP = document.querySelector('#intro p');
        if (!heroP) return;

        const text = heroP.textContent;
        heroP.textContent = '';
        heroP.style.opacity = '1';

        let index = 0;
        const speed = 50;

        function type() {
            if (index < text.length) {
                heroP.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        setTimeout(type, 500);
    }

    // Smooth Scroll with Offset
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const offset = 100;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Image Lazy Loading with Fade
    function initLazyImages() {
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

    // Navigation State on Scroll
    function initNavigation() {
        const header = document.getElementById('header');
        const nav = document.getElementById('nav');

        if (!header || !nav) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.style.padding = '0.6rem 1.8rem';
                nav.style.padding = '0.6rem 1.8rem';
            } else {
                header.style.padding = '0.8rem 2rem';
                nav.style.padding = '0.8rem 2rem';
            }

            // Hide/show on scroll
            if (currentScroll > lastScroll && currentScroll > 500) {
                header.style.transform = 'translateX(-50%) translateY(-100px)';
                nav.style.transform = 'translateY(-100px)';
            } else {
                header.style.transform = 'translateX(-50%) translateY(0)';
                nav.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        });
    }

    // Animated Counter for Stats
    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const endValue = parseInt(target.getAttribute('data-count'));
                    const duration = 2000;
                    const increment = endValue / (duration / 16);

                    let currentValue = 0;

                    const updateCounter = () => {
                        currentValue += increment;
                        if (currentValue < endValue) {
                            target.textContent = Math.floor(currentValue);
                            requestAnimationFrame(updateCounter);
                        } else {
                            target.textContent = endValue;
                        }
                    };

                    updateCounter();
                    observer.unobserve(target);
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    }

    // Loading Animation
    function initLoadingAnimation() {
        window.addEventListener('load', () => {
            const body = document.body;
            body.classList.remove('is-preload');

            // Animate hero
            const intro = document.getElementById('intro');
            if (intro) {
                intro.style.opacity = '0';
                intro.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    intro.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                    intro.style.opacity = '1';
                    intro.style.transform = 'scale(1)';
                }, 100);
            }
        });
    }

    // Add custom cursor styles
    function addCursorStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .custom-cursor {
                pointer-events: none;
                position: fixed;
                z-index: 10000;
            }

            .cursor-dot {
                width: 8px;
                height: 8px;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                border-radius: 50%;
                position: fixed;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 10001;
                transition: width 0.3s, height 0.3s;
            }

            .cursor-ring {
                width: 32px;
                height: 32px;
                border: 2px solid rgba(99, 102, 241, 0.4);
                border-radius: 50%;
                position: fixed;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 10000;
                transition: width 0.3s, height 0.3s, border-color 0.3s;
            }

            .custom-cursor.cursor-hover .cursor-dot {
                width: 12px;
                height: 12px;
            }

            .custom-cursor.cursor-hover .cursor-ring {
                width: 48px;
                height: 48px;
                border-color: rgba(99, 102, 241, 0.8);
            }

            @media (pointer: coarse) {
                .custom-cursor {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Floating Animation for Cards
    function initFloatingAnimation() {
        const cards = document.querySelectorAll('.posts article');

        cards.forEach((card, index) => {
            const delay = index * 0.1;
            const offset = (index % 2 === 0) ? '10px' : '-10px';

            card.style.animation = `float 3s ease-in-out ${delay}s infinite`;
        });

        // Add keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize everything
    function init() {
        initLoadingAnimation();
        initScrollProgress();
        initRevealAnimations();
        initCardEffects();
        initMagneticButtons();
        initParallax();
        addCursorStyles();
        initCursorEffect();
        // initTypingEffect(); // Uncomment if you want typing effect
        initSmoothScroll();
        initLazyImages();
        initNavigation();
        initCounters();
        // initFloatingAnimation(); // Uncomment for floating cards
    }

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
