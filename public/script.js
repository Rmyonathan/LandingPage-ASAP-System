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

// Image zoom functionality
function initImageZoom() {
    const modal = document.getElementById('imageZoomModal');
    const modalImg = document.getElementById('zoomImage');
    const modalTitle = document.getElementById('zoomTitle');
    const modalDescription = document.getElementById('zoomDescription');
    const closeBtn = document.querySelector('.image-zoom-close');
    const prevBtn = document.getElementById('zoomPrev');
    const nextBtn = document.getElementById('zoomNext');
    const currentIndexSpan = document.getElementById('currentImageIndex');
    const totalImagesSpan = document.getElementById('totalImages');
    
    // Get all images with zoom trigger
    const allImages = Array.from(document.querySelectorAll('.image-zoom-trigger'));
    let currentImageIndex = 0;
    
    // Update total images count
    if (totalImagesSpan) {
        totalImagesSpan.textContent = allImages.length;
    }
    
    // Function to update modal content
    function updateModalContent(index) {
        const img = allImages[index];
        const src = img.src;
        const title = img.getAttribute('data-title') || img.alt;
        const description = img.getAttribute('data-description') || '';
        
        modalImg.src = src;
        modalImg.alt = title;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        if (currentIndexSpan) {
            currentIndexSpan.textContent = index + 1;
        }
        
        // Update button states
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === allImages.length - 1;
    }
    
    // Function to show previous image
    function showPreviousImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateModalContent(currentImageIndex);
        }
    }
    
    // Function to show next image
    function showNextImage() {
        if (currentImageIndex < allImages.length - 1) {
            currentImageIndex++;
            updateModalContent(currentImageIndex);
        }
    }
    
    // Add click event to all image zoom triggers
    allImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            currentImageIndex = index;
            updateModalContent(currentImageIndex);
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal functionality
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
    
    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', showPreviousImage);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextImage);
    }
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('show')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
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
