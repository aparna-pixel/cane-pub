document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('canePubCart') || '[]');
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = total);
});