// Toko GlobalTeknik Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollIndicator();
    initSmoothScrolling();
    initNavbarEffects();
    initAnimations();
    initFormHandling();
    initScrollToTop();
    initImageZoom();
    initServiceWorker();
});

// Scroll progress indicator
function initScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollIndicator.style.transform = `scaleX(${scrollPercent / 100})`;
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effects
function initNavbarEffects() {
    const navbar = document.querySelector('nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('bg-opacity-95', 'backdrop-blur-sm');
        } else {
            navbar.classList.remove('bg-opacity-95', 'backdrop-blur-sm');
        }

        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Form handling
function initFormHandling() {
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Mohon lengkapi semua field', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Format email tidak valid', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.innerHTML = '<span class="loading"></span> Mengirim...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' :
                type === 'error' ? 'fa-exclamation-circle' :
                'fa-info-circle'
            } mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll to top button
function initScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'fixed bottom-8 right-8 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform translate-y-20 opacity-0 z-50';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.transform = 'translateY(0)';
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.transform = 'translateY(80px)';
            scrollToTopBtn.style.opacity = '0';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Mobile menu toggle (if needed)
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Counter animation for statistics
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Parallax effect for hero section
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Image zoom functionality - Open in new tab
function initImageZoom() {
    // Get all images with zoom trigger
    const allImages = Array.from(document.querySelectorAll('.image-zoom-trigger'));
    
    console.log('Found images:', allImages.length);
    
    // Add click event to all image zoom triggers
    allImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            const src = this.src;
            const title = this.getAttribute('data-title') || this.alt;
            const description = this.getAttribute('data-description') || '';
            
            // Create a new window with the image
            const newWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
            
            newWindow.document.write(`
                <!DOCTYPE html>
                <html lang="id">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${title}</title>
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        body {
                            background: #000;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            min-height: 100vh;
                            font-family: Arial, sans-serif;
                            color: white;
                        }
                        .image-container {
                            max-width: 90vw;
                            max-height: 80vh;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }
                        .image-container img {
                            max-width: 100%;
                            max-height: 100%;
                            object-fit: contain;
                            border-radius: 8px;
                            box-shadow: 0 4px 20px rgba(255,255,255,0.1);
                        }
                        .image-info {
                            margin-top: 20px;
                            text-align: center;
                            max-width: 600px;
                        }
                        .image-info h1 {
                            font-size: 24px;
                            margin-bottom: 10px;
                            color: #fff;
                        }
                        .image-info p {
                            font-size: 16px;
                            line-height: 1.6;
                            color: #ccc;
                        }
                        .close-btn {
                            position: fixed;
                            top: 20px;
                            right: 20px;
                            background: rgba(255,255,255,0.2);
                            border: none;
                            color: white;
                            font-size: 24px;
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: background 0.3s;
                        }
                        .close-btn:hover {
                            background: rgba(255,255,255,0.3);
                        }
                        .nav-buttons {
                            position: fixed;
                            top: 50%;
                            transform: translateY(-50%);
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                            padding: 0 20px;
                            pointer-events: none;
                        }
                        .nav-btn {
                            background: rgba(255,255,255,0.2);
                            border: none;
                            color: white;
                            font-size: 20px;
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: background 0.3s;
                            pointer-events: all;
                        }
                        .nav-btn:hover {
                            background: rgba(255,255,255,0.3);
                        }
                        .nav-btn:disabled {
                            opacity: 0.3;
                            cursor: not-allowed;
                        }
                    </style>
                </head>
                <body>
                    <button class="close-btn" onclick="window.close()">&times;</button>
                    
                    <div class="nav-buttons">
                        <button class="nav-btn" id="prevBtn" onclick="previousImage()">‹</button>
                        <button class="nav-btn" id="nextBtn" onclick="nextImage()">›</button>
                    </div>
                    
                    <div class="image-container">
                        <img src="${src}" alt="${title}">
                        <div class="image-info">
                            <h1>${title}</h1>
                            <p>${description}</p>
                        </div>
                    </div>
                    
                    <script>
                        let currentIndex = ${index};
                        const allImages = ${JSON.stringify(allImages.map(img => ({
                            src: img.src,
                            title: img.getAttribute('data-title') || img.alt,
                            description: img.getAttribute('data-description') || ''
                        })))};
                        
                        function updateImage() {
                            const img = allImages[currentIndex];
                            document.querySelector('img').src = img.src;
                            document.querySelector('img').alt = img.title;
                            document.querySelector('h1').textContent = img.title;
                            document.querySelector('p').textContent = img.description;
                            
                            document.getElementById('prevBtn').disabled = currentIndex === 0;
                            document.getElementById('nextBtn').disabled = currentIndex === allImages.length - 1;
                        }
                        
                        function previousImage() {
                            if (currentIndex > 0) {
                                currentIndex--;
                                updateImage();
                            }
                        }
                        
                        function nextImage() {
                            if (currentIndex < allImages.length - 1) {
                                currentIndex++;
                                updateImage();
                            }
                        }
                        
                        // Keyboard navigation
                        document.addEventListener('keydown', function(e) {
                            if (e.key === 'Escape') window.close();
                            if (e.key === 'ArrowLeft') previousImage();
                            if (e.key === 'ArrowRight') nextImage();
                        });
                        
                        // Initialize
                        updateImage();
                    </script>
                </body>
                </html>
            `);
            
            newWindow.document.close();
        });
    });
}

// Service Worker registration
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed');
                });
        });
    }
}

// Initialize all features
function initAll() {
    initScrollIndicator();
    initSmoothScrolling();
    initNavbarEffects();
    initAnimations();
    initFormHandling();
    initScrollToTop();
    initLazyLoading();
    initMobileMenu();
    initCounterAnimation();
    initParallax();
    initServiceWorker();
}

// Export functions for global access
window.TokoGlobalTeknik = {
    showNotification,
    isValidEmail,
    initAll
};
