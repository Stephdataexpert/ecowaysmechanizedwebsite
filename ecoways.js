// Hero stats counter animation (if any)
document.addEventListener("DOMContentLoaded", () => {
  // reveal on scroll
  const revealElements = document.querySelectorAll(".card, .project-tile, .contact-card, .contact-form");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });
  revealElements.forEach(el => observer.observe(el));

  // Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// Project strip controls
const strip = document.getElementById("projectStrip");
const btnPrev = document.getElementById("stripPrev");
const btnNext = document.getElementById("stripNext");

if (strip && btnPrev && btnNext) {
  const scrollAmount = 340; // approximate width of one tile + gap
  btnNext.addEventListener("click", () => {
    strip.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  btnPrev.addEventListener("click", () => {
    strip.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Optional: allow keyboard arrow keys when strip is focused
  strip.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") strip.scrollBy({ left: scrollAmount, behavior: "smooth" });
    if (e.key === "ArrowLeft") strip.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
}

// Hamburger toggle (mobile)
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("nav--open");
  });
}
