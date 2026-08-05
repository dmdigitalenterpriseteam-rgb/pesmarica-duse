const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const modal = document.getElementById('videoModal');
const video = document.getElementById('modalVideo');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.song-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const src = btn.dataset.video;
    const youtube = btn.dataset.youtube;
    if (src && modal && video) {
      video.src = src;
      modal.showModal();
      video.play().catch(() => {});
    } else if (youtube) {
      window.open(youtube, '_blank', 'noopener');
    }
  });
});

if (closeModal && modal && video) {
  closeModal.addEventListener('click', () => {
    video.pause();
    video.removeAttribute('src');
    modal.close();
  });
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      video.pause();
      video.removeAttribute('src');
      modal.close();
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
