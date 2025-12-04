// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll animations
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelector('.hero-section').style.backgroundPositionY = `${scrolled * 0.3}px`;
  document.querySelectorAll('.service-card, .project-card').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) el.classList.add('show');
  });
});
