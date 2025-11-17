// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('canePubCart') || '[]');
  const total = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  document.getElementById('cart-count').textContent = total;
}
document.addEventListener('DOMContentLoaded', updateCartCount);