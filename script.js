
// Small script for nav toggle, footer year, and simple contact form handling
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primary-nav');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));

  if (!expanded) {
    primaryNav.classList.add('open');
    primaryNav.setAttribute('aria-hidden', 'false');
  } else {
    primaryNav.classList.remove('open');
    primaryNav.setAttribute('aria-hidden', 'true');
  }
});

// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form: example client-side handling (replace with real endpoint when ready)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  // Minimal validation (browser already handles required)
  status.textContent = 'Sending...';
  // Simulation of async send
  setTimeout(() => {
    status.textContent = 'Thanks — your message has been received! (This is a demo)';
    form.reset();
  }, 800);
});
