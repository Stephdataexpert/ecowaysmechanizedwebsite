// small DOM helpers
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

// mobile nav toggle
const navToggle = $('#navToggle');
const siteNav = $('#siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', (!expanded).toString());
    siteNav.classList.toggle('open');
  });
}

// add class when header should have background
function handleHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}
window.addEventListener('scroll', handleHeaderScroll);
window.addEventListener('load', handleHeaderScroll);

// reveal on scroll
function revealOnScroll() {
  const items = [...$$('.card'), ...$$('.project-card'), ...$$('.contact-card'), ...$$('.contact-form')];
  const winH = window.innerHeight;
  items.forEach(el => {
    if (el.getBoundingClientRect().top < winH - 80) el.classList.add('visible');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// set year
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;
});

// lazy images
$$('img').forEach(img => {
  if (!img.hasAttribute('loading')) img.setAttribute('loading','lazy');
});
