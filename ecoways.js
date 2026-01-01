// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');

navToggle?.addEventListener('click', () => {
  if(nav.style.display === 'flex'){
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '10px';
    nav.style.background = 'rgba(255,255,255,0.95)';
    nav.style.padding = '20px';
    nav.style.position = 'absolute';
    nav.style.top = '60px';
    nav.style.right = '20px';
    nav.style.borderRadius = '12px';
    nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
  }
});

// ===== Hero / reveal animations =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.1});

document.querySelectorAll('.card, .project-tile, .contact-card, .contact-form').forEach(el => observer.observe(el));

// ===== Projects horizontal strip controls =====
const strip = document.getElementById('projectStrip');
document.getElementById('stripPrev')?.addEventListener('click', () => {
  strip.scrollBy({left:-350, behavior:'smooth'});
});
document.getElementById('stripNext')?.addEventListener('click', () => {
  strip.scrollBy({left:350, behavior:'smooth'});
});

// ===== Set current year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Netlify contact form submission =====
const form = document.querySelector('.contact-form');
const thankYouMsg = document.getElementById('thankYouMsg');

if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = new FormData(form);

    fetch("/", {method:"POST", body:formData})
      .then(() => {
        form.style.display = "none";
        thankYouMsg.style.display = "block";
        thankYouMsg.classList.add('show');
      })
      .catch((err) => alert("Form submission failed: " + err));
  });
}

// ===== Optional: Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});
