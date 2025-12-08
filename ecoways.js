// ecoways.js — complete interactive helpers for Ecoways site
document.addEventListener('DOMContentLoaded', () => {
  // 1) Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2) Smooth scroll for internal links (progressive)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // update focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // 3) Image modal (click any project image to open larger view)
  const projectImgs = Array.from(document.querySelectorAll('.project-tile img'));
  if (projectImgs.length) {
    // create modal elements
    const modal = document.createElement('div');
    modal.id = 'imgModal';
    modal.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);z-index:2000;opacity:0;pointer-events:none;transition:opacity .2s ease';
    modal.innerHTML = `
      <div class="modal-inner" style="position:relative;max-width:90vw;max-height:90vh;">
        <button aria-label="Close image" class="modal-close" style="position:absolute;right:-6px;top:-6px;background:#fff;border-radius:999px;border:0;padding:8px;cursor:pointer;z-index:3">✕</button>
        <img alt="" style="display:block;max-width:100%;max-height:85vh;border-radius:8px;box-shadow:0 10px 40px rgba(0,0,0,0.6)" />
        <div class="modal-caption" style="color:#fff;margin-top:10px;text-align:center;font-weight:600"></div>
      </div>
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('img');
    const modalCaption = modal.querySelector('.modal-caption');
    const modalClose = modal.querySelector('.modal-close');

    const openModal = (src, alt) => {
      modalImg.src = src;
      modalImg.alt = alt || '';
      modalCaption.textContent = alt || '';
      modal.style.pointerEvents = 'auto';
      requestAnimationFrame(() => { modal.style.opacity = '1'; });
      // trap focus: move focus to close button
      modalClose.focus();
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal.style.opacity = '0';
      modal.style.pointerEvents = 'none';
      modalImg.src = '';
      document.body.style.overflow = '';
    };

    projectImgs.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => openModal(img.src, img.alt || img.getAttribute('data-caption') || ''));
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.pointerEvents === 'auto') closeModal();
    });
  }

  // 4) Netlify form AJAX submit (only if data-netlify="true" present)
  const form = document.querySelector('form[name="contact"]');
  if (form && (form.dataset.netlify === 'true' || form.hasAttribute('data-netlify'))) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }
      const formData = new FormData(form);

      // Netlify expects the form name as a field if using AJAX
      if (!formData.get('form-name')) {
        formData.append('form-name', form.getAttribute('name') || 'contact');
      }

      fetch('/', {
        method: 'POST',
        body: formData
      })
      .then(() => {
        // If you have an inline thank you element (id="thankYouMsg"), show it
        const thankEl = document.getElementById('thankYouMsg');
        if (thankEl) {
          form.style.display = 'none';
          thankEl.style.display = 'block';
          // animate in if using .show class
          setTimeout(() => thankEl.classList && thankEl.classList.add('show'), 10);
        } else if (form.getAttribute('action')) {
          // fallback: redirect if action present
          window.location.href = form.getAttribute('action');
        } else {
          // simple fallback message
          alert('Thanks — your message has been sent.');
          form.reset();
        }
      })
      .catch((err) => {
        console.error('Form submit error:', err);
        alert('Submission failed — please try again later.');
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.getAttribute('data-label') || 'Send Message';
        }
      });
    });
  }

  // 5) Optional: improve accessibility for project tiles (keyboard)
  document.querySelectorAll('.project-tile').forEach(tile => {
    tile.setAttribute('tabindex', '0');
    tile.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const img = tile.querySelector('img');
        if (img) img.click();
      }
    });
  });
});
