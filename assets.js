// Load Header & Footer
fetch('header.html').then(r => r.text()).then(html => document.getElementById('header').innerHTML = html);
fetch('footer.html').then(r => r.text()).then(html => document.getElementById('footer').innerHTML = html);

// Mobile menu toggle
document.addEventListener('click', e => {
  if (e.target.matches('.mobile-menu')) {
    document.querySelector('.nav-links').classList.toggle('active');
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});