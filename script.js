// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.platform-card, .step, .contact-item, .download-btn');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Vui lòng điền đầy đủ thông tin', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Email không hợp lệ', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Đang gửi tin nhắn...', 'info');
            
            setTimeout(() => {
                showNotification('Tin nhắn đã được gửi thành công!', 'success');
                this.reset();
            }, 2000);
        });
    }
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Modal functionality
function showModal(title, image, description, link) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    
    // Set modal content
    modalImg.src = image;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalLink.href = link;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Close modal when clicking outside
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Platform card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const platformCards = document.querySelectorAll('.platform-card');
    
    platformCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Video placeholder click handlers
document.addEventListener('DOMContentLoaded', function() {
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            showNotification('Video sẽ được phát trong tương lai', 'info');
        });
    });
});

// Download button analytics (simulated)
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('strong').textContent;
            showNotification(`Chuyển hướng đến ${platform}...`, 'info');
            
            // Simulate redirect delay
            setTimeout(() => {
                showNotification('Link tải ứng dụng sẽ được cập nhật sau', 'info');
            }, 1000);
        });
    });
});

// Modern platform cards interaction
document.addEventListener('DOMContentLoaded', function() {
    const modernCards = document.querySelectorAll('.modern-card');
    const visitButtons = document.querySelectorAll('.visit-btn');
    
    // Platform data for modern cards
    const modernPlatformData = {
        'news': {
            title: 'Báo Cần Thơ Online',
            image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=300&fit=crop&crop=center',
            description: 'Báo điện tử chính thống của thành phố Cần Thơ, cung cấp tin tức địa phương, thời sự, kinh tế, văn hóa, thể thao và các thông tin quan trọng khác.',
            links: [
                { text: 'Truy cập website', url: 'https://baocantho.com.vn', icon: 'fas fa-external-link-alt' }
            ]
        },
        'tv': {
            title: 'Web Truyền hình Cần Thơ',
            image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=300&fit=crop&crop=center',
            description: 'Website truyền hình trực tuyến với các chương trình tin tức, giải trí, phóng sự và các sự kiện quan trọng của thành phố Cần Thơ.',
            links: [
                { text: 'Truy cập website', url: '#', icon: 'fas fa-external-link-alt' }
            ]
        },
        'radio': {
            title: 'Web Phát thanh Cần Thơ',
            image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&h=300&fit=crop&crop=center',
            description: 'Kênh phát thanh trực tuyến với các chương trình âm nhạc, tin tức, giải trí và thông tin hữu ích cho người dân.',
            links: [
                { text: 'Truy cập website', url: '#', icon: 'fas fa-external-link-alt' }
            ]
        },
        'youtube': {
            title: 'YouTube Channels',
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=300&fit=crop&crop=center',
            description: '3 kênh YouTube chính thức: Cần Thơ TV (truyền hình), Cần Thơ Radio (phát thanh), và Cần Thơ News (tin tức nhanh).',
            links: [
                { text: 'Cần Thơ TV', url: 'https://youtube.com/c/CanThoTV', icon: 'fab fa-youtube' },
                { text: 'Cần Thơ Radio', url: '#', icon: 'fab fa-youtube' },
                { text: 'Cần Thơ News', url: '#', icon: 'fab fa-youtube' }
            ]
        },
        'tiktok': {
            title: 'TikTok Channels',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop&crop=center',
            description: '2 kênh TikTok chuyên về nội dung video ngắn: Cần Thơ TV TikTok (giải trí) và Cần Thơ News TikTok (tin tức nhanh).',
            links: [
                { text: 'Cần Thơ TV TikTok', url: '#', icon: 'fab fa-tiktok' },
                { text: 'Cần Thơ News TikTok', url: '#', icon: 'fab fa-tiktok' }
            ]
        },
        'facebook': {
            title: 'Facebook Pages',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop&crop=center',
            description: '3 trang Facebook chính thức: Báo Cần Thơ, Truyền hình Cần Thơ, và Phát thanh Cần Thơ với nội dung đa dạng.',
            links: [
                { text: 'Báo Cần Thơ Facebook', url: '#', icon: 'fab fa-facebook' },
                { text: 'Truyền hình Cần Thơ Facebook', url: '#', icon: 'fab fa-facebook' },
                { text: 'Phát thanh Cần Thơ Facebook', url: '#', icon: 'fab fa-facebook' }
            ]
        },
        'zalo': {
            title: 'Zalo Official Account',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop&crop=center',
            description: 'Kênh Zalo chính thức của Báo & PT-TH Cần Thơ với tin tức, tương tác trực tiếp và thông tin hữu ích cho độc giả.',
            links: [
                { text: 'Official Account', url: '#', icon: 'fas fa-comments' }
            ]
        },
        'mobile': {
            title: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=300&fit=crop&crop=center',
            description: 'Ứng dụng mobile "Truyền hình Cần Thơ" cho phép xem truyền hình trực tuyến, xem lại chương trình và lịch phát sóng chi tiết.',
            links: [
                { text: 'Google Play', url: '#', icon: 'fab fa-google-play' },
                { text: 'App Store', url: '#', icon: 'fab fa-apple' }
            ]
        }
    };
    
    // Add click event to modern cards
    modernCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on visit buttons
            if (e.target.closest('.visit-btn')) {
                return;
            }
            
            const category = this.getAttribute('data-category');
            const data = modernPlatformData[category];
            
            if (data) {
                showModernModal(data);
            }
        });
        
        // Add 3D hover effects
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        // 3D mouse tracking effect
        card.addEventListener('mousemove', function(e) {
            requestAnimationFrame(() => {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
        });
    });
    
    // Visit button tracking
    visitButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            const linkText = this.textContent.trim();
            const card = this.closest('.modern-card');
            const category = card.getAttribute('data-category');
            const data = modernPlatformData[category];
            
            console.log(`User clicked on: ${linkText} from ${data.title}`);
            
            // For external links, allow normal behavior
            if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
                return;
            }
            
            // For placeholder links, prevent default and show message
            e.preventDefault();
            showNotification(`Link ${data.title} sẽ được cập nhật sau`, 'info');
        });
    });
});

// Show modern modal
function showModernModal(data) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    
    // Set modal content
    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    
    // Create links HTML
    let linksHTML = '';
    data.links.forEach(link => {
        linksHTML += `
            <a href="${link.url}" class="platform-link" target="_blank">
                <i class="${link.icon}"></i>
                ${link.text}
            </a>
        `;
    });
    
    // Update modal link section
    const modalLinksContainer = modal.querySelector('.modal-text');
    const existingLink = modalLinksContainer.querySelector('#modal-link');
    if (existingLink) {
        existingLink.remove();
    }
    
    // Add new links
    const linksDiv = document.createElement('div');
    linksDiv.className = 'modal-links';
    linksDiv.innerHTML = linksHTML;
    modalLinksContainer.appendChild(linksDiv);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Close modal when clicking outside
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Lazy loading for images (if needed)
document.addEventListener('DOMContentLoaded', function() {
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
});

// Add CSS for mobile menu
const mobileMenuCSS = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 2rem 0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;

// Inject mobile menu CSS
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Header scroll effect is already handled above
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading states for better UX and welcome modal
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Remove loading class after page is fully loaded
    window.addEventListener('load', function() {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
        
        // Show welcome modal after page loads
        setTimeout(() => {
            showWelcomeModal();
        }, 1000); // Delay 1 second after page load
    });
});

// Welcome modal function
function showWelcomeModal() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    
    // Set welcome modal content
    modalImg.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop&crop=center';
    modalImg.alt = 'Chào mừng đến với Báo &  PT-TH Cần Thơ';
    modalTitle.textContent = '🎉 Chào mừng đến với Báo &  PT-TH Cần Thơ';
    modalDescription.innerHTML = `
        <p style="font-size: 1.1rem; margin-bottom: 1.5rem; color: #1e40af; font-weight: 600;">
            Khám phá các nền tảng số hiện đại của chúng tôi:
        </p>
        <ul style="margin: 1rem 0; padding-left: 1.5rem;">
            <li>📰 <strong>Báo điện tử</strong> - Tin tức cập nhật 24/7</li>
            <li>📺 <strong>Web Truyền hình</strong> - Xem trực tuyến</li>
            <li>📻 <strong>Web Phát thanh</strong> - Nghe trực tuyến</li>
            <li>🎥 <strong>YouTube Channels</strong> - 3 kênh video</li>
            <li>📱 <strong>TikTok</strong> - 2 kênh video ngắn</li>
            <li>📘 <strong>Facebook</strong> - 3 trang mạng xã hội</li>
            <li>💬 <strong>Zalo</strong> - Kênh tương tác</li>
            <li>📱 <strong>Mobile App</strong> - Ứng dụng di động</li>
        </ul>
        <p style="margin-top: 1.5rem; font-style: italic; color: #f59e0b;">
            💡 <strong>Tip:</strong> Click vào bất kỳ nền tảng nào để khám phá chi tiết!
        </p>
    `;
    modalLink.href = '#nen-tang';
    modalLink.innerHTML = '<i class="fas fa-rocket"></i> Khám phá ngay';
    
    // Show modal with animation
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'slideIn 0.5s ease';
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Close modal when clicking outside
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Add event listener for welcome modal button
document.addEventListener('DOMContentLoaded', function() {
    const welcomeModalBtn = document.getElementById('show-welcome-modal');
    if (welcomeModalBtn) {
        welcomeModalBtn.addEventListener('click', function() {
            showWelcomeModal();
        });
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
    
    // Enter key for form submission
    if (e.key === 'Enter' && e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        const form = e.target.closest('form');
        if (form) {
            form.dispatchEvent(new Event('submit'));
        }
    }
});

// Add accessibility improvements and enhanced animations
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button, .btn, .download-btn');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #1e40af';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Enhanced animations for various elements
    const animatedElements = document.querySelectorAll('.hero-title, .hero-subtitle, .section-title, .category-title');
    animatedElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Logo animation
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // Social links enhanced animation
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotate(360deg) scale(1.2)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Download buttons enhanced animation
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
}); 