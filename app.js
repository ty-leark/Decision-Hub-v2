/* =========================
   MOBILE MENU
========================= */

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const body = document.querySelector('body');

if (menu && menuLinks) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
        body.classList.toggle('active');
    });
}

/* =========================
   SCROLL REVEAL (LIGHTWEIGHT, NO HEAVY GSAP DEPENDENCY)
========================= */

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(el => observer.observe(el));

/* =========================
   CURSOR GLOW (CINEMATIC EFFECT)
========================= */

const glow = document.querySelector('.cursor-glow');

if (glow) {
    window.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    });
}

/* =========================
   NAVBAR SCROLL STATE
========================= */

const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.background = 'rgba(17,17,17,0.85)';
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
        } else {
            navbar.style.background = 'rgba(17,17,17,0.55)';
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        }
    });
}

/* =========================
   BUTTON MICRO INTERACTIONS
========================= */

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px) scale(1.02)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
});

/* =========================
   IMAGE PARALLAX (LIGHT)
========================= */

