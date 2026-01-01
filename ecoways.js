// toggle nav on mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
navToggle?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// hero/reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');}});
},{threshold:0.1});
document.querySelectorAll('.card, .project-tile, .contact-card, .contact-form').forEach(el=>observer.observe(el));

// horizontal project strip controls
const strip = document.getElementById('projectStrip');
document.getElementById('stripPrev')?.addEventListener('click',()=>{strip.scrollBy({left:-350,behavior:'smooth'})});
document.getElementById('stripNext')?.addEventListener('click',()=>{strip.scrollBy({left:350,behavior:'smooth'})});

// set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Netlify form submission
const form = document.querySelector('.contact-form');
const thankYouMsg = document.getElementById('thankYouMsg');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = new FormData(form);
    fetch("/", {method:"POST",body:formData})
      .then(()=>{
        form.style.display="none";
        thankYouMsg.style.display="block";
        thankYouMsg.classList.add('show');
      })
      .catch((err)=>alert("Form submission failed: "+err));
  });
}
