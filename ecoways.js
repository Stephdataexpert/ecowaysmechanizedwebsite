// Mobile nav
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');

navToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Reveal animations
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  })
},{threshold:.15});

document.querySelectorAll('.card,.project-tile,.contact-card,.contact-form')
.forEach(el=>observer.observe(el));

// Carousel controls
const strip=document.getElementById('projectStrip');
document.getElementById('stripPrev')?.addEventListener('click',()=>strip.scrollBy({left:-360,behavior:'smooth'}));
document.getElementById('stripNext')?.addEventListener('click',()=>strip.scrollBy({left:360,behavior:'smooth'}));

// Year
document.getElementById('year').textContent=new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
