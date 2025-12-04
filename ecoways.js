// small helper
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

// NAV toggle for mobile
const navToggle = $('#navToggle') || $('#navToggle'); // if present
const siteNav = $('#siteNav') || document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => siteNav.classList.toggle('open'));
}

// set year
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;
});

// HERO: fade-in and parallax
const heroInner = document.querySelector('.hero-inner');
window.addEventListener('load', () => {
  if (heroInner) heroInner.classList.add('visible');
});

// Reveal on scroll for cards and tiles
const revealEls = [...$$('.card'), ...$$('.project-tile'), ...$$('.contact-card'), ...$$('.contact-form')];
function revealOnScroll() {
  const winH = window.innerHeight;
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < winH - 80) el.classList.add('visible');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Parallax background movement
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const sc = window.scrollY;
  hero.style.backgroundPosition = `center ${Math.max(-20, sc * 0.15)}px`;
});

// PROJECT STRIP: horizontal navigation (buttons + keyboard)
const strip = document.getElementById('projectStrip');
const btnNext = document.getElementById('stripNext');
const btnPrev = document.getElementById('stripPrev');
if (btnNext && btnPrev && strip) {
  btnNext.addEventListener('click', () => {
    strip.scrollBy({left: 360, behavior: 'smooth'});
  });
  btnPrev.addEventListener('click', () => {
    strip.scrollBy({left: -360, behavior: 'smooth'});
  });
  // keyboard navigation
  strip.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') strip.scrollBy({left:360, behavior:'smooth'});
    if (e.key === 'ArrowLeft') strip.scrollBy({left:-360, behavior:'smooth'});
  });
}

// make images lazy (simple)
$$('img').forEach(img => {
  if (!img.hasAttribute('loading')) img.setAttribute('loading','lazy');
});
