// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('.main-nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Trends Carousel
    const slides = document.querySelectorAll('.trend-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Auto-advance carousel every 5s
    setInterval(() => {
        nextBtn.click();
    }, 5000);

    // FAQ Toggle (simple expand)
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            const p = item.querySelector('p');
            p.style.display = p.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Simple Chart for Metrics (using Canvas)
    const canvas = document.getElementById('metrics-chart');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#3498DB';
        ctx.fillRect(50, 150, 50, -100); // CTR bar
        ctx.fillStyle = '#F39C12';
        ctx.fillRect(120, 150, 50, -80); // Conversion bar
        ctx.fillStyle = '#2C3E50';
        ctx.fillRect(190, 150, 50, -120); // ROAS bar
        ctx.fillStyle = '#34495E';
        ctx.font = '12px Inter';
        ctx.fillText('Metrics Overview', 50, 30);
    }

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('section').forEach(sec => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(50px)';
        sec.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(sec);
    });
});