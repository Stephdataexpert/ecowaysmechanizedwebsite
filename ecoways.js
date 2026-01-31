// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));

// Reveal animations
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:.15});

document.querySelectorAll('.card,.project-tile,.contact-card,.contact-form')
.forEach(el=>observer.observe(el));

// Projects carousel controls
const strip=document.getElementById('projectStrip');
document.getElementById('stripPrev')?.addEventListener('click',()=>strip.scrollBy({left:-360,behavior:'smooth'}));
document.getElementById('stripNext')?.addEventListener('click',()=>strip.scrollBy({left:360,behavior:'smooth'}));

// Set current year
document.getElementById('year').textContent=new Date().getFullYear();

// Smooth scroll anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Netlify form submit
const form = document.querySelector('.contact-form');
const thankYouMsg = document.getElementById('thankYouMsg');

if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    fetch("/", {method:"POST", body:data})
      .then(()=>{
        form.style.display="none";
        thankYouMsg.style.display="block";
        thankYouMsg.classList.add('show');
      })
      .catch(err=>alert("Form submission failed: "+err));
  });
}
