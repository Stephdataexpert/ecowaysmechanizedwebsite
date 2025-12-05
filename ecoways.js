const projectStrip = document.getElementById('projectStrip');
const prevBtn = document.getElementById('stripPrev');
const nextBtn = document.getElementById('stripNext');

prevBtn.addEventListener('click', () => {
  projectStrip.scrollBy({ left: -350, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  projectStrip.scrollBy({ left: 350, behavior: 'smooth' });
});
