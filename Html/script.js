// script.js — mobile nav, simple UI handlers
(function () {
  // nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('show');
    });
  }

  // set current year in footers
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year-2')?.textContent = y;
  document.getElementById('year-3')?.textContent = y;
  document.getElementById('year-4')?.textContent = y;

  // menu filter chips (menu.html)
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      document.querySelectorAll('#menu-grid .menu-item').forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // newsletter form handler
  window.handleNewsletter = function (e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email?.value || form.querySelector('input[type="email"]')?.value;
    if (!email) return false;
    alert('Thanks! We\'ve added ' + email + ' to our list (demo).');
    form.reset();
    return false;
  };

  // contact form handler (demo)
  window.handleContact = function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email-contact').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('contact-status');
    if (!name || !email || !message) {
      status.textContent = 'Please fill all fields.';
      return false;
    }
    // demo: pretend to send
    status.textContent = 'Sending…';
    setTimeout(() => {
      status.textContent = 'Thanks, ' + name + '! We received your message. (demo)';
      e.target.reset();
    }, 700);
    return false;
  };
})();
