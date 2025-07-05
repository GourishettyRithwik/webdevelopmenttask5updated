// Reveal elements on scroll
const sections = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      section.classList.add('show');
    }
  });
});