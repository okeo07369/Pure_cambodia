// Navigation mobile toggle
document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const header = document.querySelector('.main-header');
    const nav = document.querySelector('.main-nav');
    
    // Ajout du bouton hamburger pour mobile
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-nav-toggle';
    mobileToggle.innerHTML = '☰';
    mobileToggle.style.display = 'none';
    header.insertBefore(mobileToggle, nav);

    // Gestion du menu mobile
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileToggle.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
    });

    // Animation au scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Animation des cartes produits
    const productCards = document.querySelectorAll('.product-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const productObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                productObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    productCards.forEach(card => {
        productObserver.observe(card);
    });
});