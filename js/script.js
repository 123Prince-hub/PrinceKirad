// ===== Loading Animation with Code Typing =====
window.addEventListener('DOMContentLoaded', () => {
    const codeLines = [
        { text: 'import', color: '#cc7832' },
        { text: ' portfolio\n', color: '#a9b7c6' },
        { text: 'from', color: '#cc7832' },
        { text: ' skills ', color: '#a9b7c6' },
        { text: 'import', color: '#cc7832' },
        { text: ' AI, FullStack\n\n', color: '#a9b7c6' },
        { text: 'class', color: '#cc7832' },
        { text: ' ', color: '#a9b7c6' },
        { text: 'Developer', color: '#ffc66d' },
        { text: ':\n', color: '#a9b7c6' },
        { text: '    ', color: '#a9b7c6' },
        { text: 'def', color: '#cc7832' },
        { text: ' ', color: '#a9b7c6' },
        { text: '__init__', color: '#ffc66d' },
        { text: '(', color: '#a9b7c6' },
        { text: 'self', color: '#94558d' },
        { text: '):\n', color: '#a9b7c6' },
        { text: '        ', color: '#a9b7c6' },
        { text: 'self', color: '#94558d' },
        { text: '.name = ', color: '#a9b7c6' },
        { text: '"Prince Kirad"', color: '#6a8759' },
        { text: '\n        ', color: '#a9b7c6' },
        { text: 'self', color: '#94558d' },
        { text: '.role = ', color: '#a9b7c6' },
        { text: '"GenAI Engineer"', color: '#6a8759' },
        { text: '\n\n    ', color: '#a9b7c6' },
        { text: 'def', color: '#cc7832' },
        { text: ' ', color: '#a9b7c6' },
        { text: 'build', color: '#ffc66d' },
        { text: '(', color: '#a9b7c6' },
        { text: 'self', color: '#94558d' },
        { text: '):\n        ', color: '#a9b7c6' },
        { text: 'return', color: '#cc7832' },
        { text: ' ', color: '#a9b7c6' },
        { text: '"Ready! 🚀"', color: '#6a8759' },
        { text: '\n\ndev = ', color: '#a9b7c6' },
        { text: 'Developer', color: '#ffc66d' },
        { text: '()\n', color: '#a9b7c6' },
        { text: 'print', color: '#8888c6' },
        { text: '(dev.', color: '#a9b7c6' },
        { text: 'build', color: '#ffc66d' },
        { text: '())', color: '#a9b7c6' }
    ];

    let tokenIndex = 0;
    let charIndex = 0;
    const typingSpeed = 15;
    const typingCode = document.getElementById('typingCode');

    function typeCode() {
        if (tokenIndex < codeLines.length) {
            const token = codeLines[tokenIndex];
            if (charIndex < token.text.length) {
                const span = document.createElement('span');
                span.style.color = token.color;
                span.textContent = token.text[charIndex];
                typingCode.appendChild(span);
                charIndex++;
                setTimeout(typeCode, typingSpeed);
            } else {
                tokenIndex++;
                charIndex = 0;
                setTimeout(typeCode, typingSpeed);
            }
        }
    }

    typeCode();

    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
        startTypingAnimation();
    }, 2000);
});


// ===== Typing Animation =====
function startTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.innerHTML = "Hi, I'm <span class='gradient-text'>Prince Kirad</span>";
    heroTitle.style.opacity = '0';
    
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.animation = 'fadeInUp 1s ease forwards';
        
        // Add wave effect after 1 second
        setTimeout(() => {
            heroTitle.classList.add('wave-animation');
            // Start subtitle typing
            typeSubtitle();
        }, 1000);
    }, 100);
}

// Subtitle Typing Effect
function typeSubtitle() {
    const subtitle = document.querySelector('.hero-subtitle');
    const text = 'Full Stack GenAI Engineer';
    subtitle.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 80);
        }
    }
    type();
}

// ===== Code Rain Animation =====
const codeRain = document.getElementById('codeRain');
const codeSymbols = [
    '{ }', '< >', '( )', '[ ]', '=>', '===', '!==', '&&', '||',
    'const', 'let', 'var', 'function', 'return', 'if', 'else',
    'class', 'import', 'export', 'async', 'await', 'try', 'catch',
    '0', '1', 'true', 'false', 'null', 'undefined', 'this',
    '.map()', '.filter()', '.reduce()', '.forEach()',
    'console.log()', 'useState', 'useEffect', 'props', 'state'
];

function createCodeSymbol() {
    const symbol = document.createElement('div');
    symbol.className = 'code-symbol';
    symbol.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
    symbol.style.left = Math.random() * 100 + '%';
    symbol.style.animationDuration = (Math.random() * 12 + 10) + 's';
    symbol.style.animationDelay = Math.random() * 5 + 's';
    
    const colors = ['#6366f1', '#8b5cf6', '#ec4899'];
    symbol.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    codeRain.appendChild(symbol);
    
    setTimeout(() => symbol.remove(), 22000);
}

setInterval(createCodeSymbol, 1800);

// ===== Particles for About Section =====
if (document.getElementById('aboutParticles')) {
    particlesJS('aboutParticles', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: '#8b5cf6' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 120,
                color: '#8b5cf6',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: false },
                onclick: { enable: false },
                resize: true
            }
        },
        retina_detect: true
    });
}

// ===== Particles for Testimonials Section =====
if (document.getElementById('testimonialsParticles')) {
    particlesJS('testimonialsParticles', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: '#ec4899' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 120,
                color: '#ec4899',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: false },
                onclick: { enable: false },
                resize: true
            }
        },
        retina_detect: true
    });
}

// ===== Circuit Lines (Skills Section) =====
const circuitBg = document.getElementById('circuitBg');
for(let i = 0; i < 15; i++) {
    const line = document.createElement('div');
    line.className = 'circuit-line';
    const isHorizontal = Math.random() > 0.5;
    if(isHorizontal) {
        line.style.width = Math.random() * 200 + 100 + 'px';
        line.style.height = '2px';
        line.style.top = Math.random() * 100 + '%';
        line.style.left = Math.random() * 100 + '%';
    } else {
        line.style.width = '2px';
        line.style.height = Math.random() * 200 + 100 + 'px';
        line.style.top = Math.random() * 100 + '%';
        line.style.left = Math.random() * 100 + '%';
    }
    line.style.animationDelay = Math.random() * 3 + 's';
    circuitBg.appendChild(line);
}

// ===== Circuit Lines (Contact Section) =====
const contactCircuitBg = document.getElementById('contactCircuitBg');
if (contactCircuitBg) {
    for(let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.className = 'circuit-line';
        const isHorizontal = Math.random() > 0.5;
        if(isHorizontal) {
            line.style.width = Math.random() * 200 + 100 + 'px';
            line.style.height = '2px';
            line.style.top = Math.random() * 100 + '%';
            line.style.left = Math.random() * 100 + '%';
        } else {
            line.style.width = '2px';
            line.style.height = Math.random() * 200 + 100 + 'px';
            line.style.top = Math.random() * 100 + '%';
            line.style.left = Math.random() * 100 + '%';
        }
        line.style.animationDelay = Math.random() * 3 + 's';
        contactCircuitBg.appendChild(line);
    }
}

// ===== Floating Dots (Experience Section) =====
const dotsBg = document.getElementById('dotsBg');
for(let i = 0; i < 30; i++) {
    const dot = document.createElement('div');
    dot.className = 'floating-dot';
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = Math.random() * 100 + '%';
    dot.style.animationDelay = Math.random() * 4 + 's';
    dot.style.animationDuration = (Math.random() * 3 + 3) + 's';
    dotsBg.appendChild(dot);
}

// ===== Wave Lines (Services Section) =====
const waveLines = document.getElementById('waveLines');
for(let i = 0; i < 5; i++) {
    const line = document.createElement('div');
    line.className = 'wave-line';
    line.style.top = (i * 20 + 10) + '%';
    line.style.animationDelay = (i * 0.5) + 's';
    waveLines.appendChild(line);
}

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Hamburger Menu =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.glass-card, .project-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Contact Form with Google Sheets Integration =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// IMPORTANT: Replace this URL with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toLocaleString()
    };

    // Show loading state
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
    submitBtn.disabled = true;
    
    try {
        // Send data to Google Sheets
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        // Show success message
        formMessage.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        formMessage.className = 'form-message success';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
        
    } catch (error) {
        // Show error message
        formMessage.textContent = '✗ Oops! Something went wrong. Please try again.';
        formMessage.className = 'form-message error';
        console.error('Error:', error);
    } finally {
        // Reset button state
        btnText.style.display = 'inline-block';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;
    }
});

// ===== Skill Bar Animation on Scroll =====
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fillBar 1.5s ease-in-out forwards';
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===== Typing Effect for Hero Subtitle (Optional Enhancement) =====
const heroSubtitle = document.querySelector('.hero-subtitle');
const subtitleText = heroSubtitle.textContent;
let charIndex = 0;

function typeEffect() {
    if (charIndex < subtitleText.length) {
        heroSubtitle.textContent = subtitleText.slice(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, 100);
    }
}

// Uncomment to enable typing effect
// heroSubtitle.textContent = '';
// setTimeout(typeEffect, 500);

// ===== Parallax Effect for Hero Section =====
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent && heroImage) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ===== Navbar Mobile Menu Close on Click Outside =====
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== Add Hover Effect to Project Cards =====
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Console Message =====
console.log('%c👋 Welcome to Prince\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cLooking for a developer? Let\'s connect!', 'color: #8b5cf6; font-size: 14px;');

// ===== Swiper Sliders =====
const servicesSwiper = new Swiper('.servicesSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

// Testimonials Swiper
const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

// Projects Swiper
const projectsSwiper = new Swiper('.projectsSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

// Tools Swiper
const toolsSwiper = new Swiper('.toolsSwiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: { slidesPerView: 4 },
        768: { slidesPerView: 5 },
        1024: { slidesPerView: 6 },
    },
});

// Simple Cursor Effect
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// Expand on hover
document.querySelectorAll('a, button, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => cursorDot.classList.add('expand'));
    el.addEventListener('mouseleave', () => cursorDot.classList.remove('expand'));
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Copy Email on Click
function copyEmail() {
    const email = 'princekirad11@gmail.com';
    const emailElement = document.querySelector('.email-copy');
    
    navigator.clipboard.writeText(email).then(() => {
        emailElement.classList.add('copied');
        emailElement.textContent = 'Email Copied! ✓';
        
        setTimeout(() => {
            emailElement.classList.remove('copied');
            emailElement.textContent = email;
        }, 2000);
    });
}

// 3D Tilt Effect
function apply3DTilt() {
    const tiltCards = document.querySelectorAll('.project-card, .service-card, .testimonial-card, .skill-category');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.setProperty('--rotate-x', `${rotateX}deg`);
            card.style.setProperty('--rotate-y', `${rotateY}deg`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rotate-x', '0deg');
            card.style.setProperty('--rotate-y', '0deg');
        });
    });
}

// Apply on load and after Swiper initialization
setTimeout(apply3DTilt, 500);

// Scroll Progress Bar
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 1000 } },
        color: { value: '#6366f1' },
        shape: { type: 'circle' },
        opacity: { value: 0.7, random: true },
        size: { value: 3.5, random: true },
        line_linked: {
            enable: true,
            distance: 140,
            color: '#8b5cf6',
            opacity: 0.6,
            width: 1.5
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
