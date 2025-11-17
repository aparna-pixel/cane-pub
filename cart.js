document.addEventListener('DOMContentLoaded', () => {
  const itemsDiv = document.getElementById('cart-items');
  const totalP = document.getElementById('total');
  let cart = JSON.parse(localStorage.getItem('canePubCart') || '[]');

  if (cart.length === 0) {
    itemsDiv.innerHTML = '<p>Your cart is empty!</p>';
    return;
  }

  itemsDiv.innerHTML = cart.map(item => `
    <div class="menu-item">
      <h3>${item.name} x${item.qty}</h3>
      <p>₹${item.price * item.qty}</p>
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  totalP.textContent = `Total: ₹${total}`;
});

function removeFromCart(name) {
  let cart = JSON.parse(localStorage.getItem('canePubCart') || '[]');
  cart = cart.filter(item => item.name !== name);
  localStorage.setItem('canePubCart', JSON.stringify(cart));
  location.reload();
}

function checkout() {
  alert('Order placed! Visit us at Bogadi 2nd Stage. (Demo)');
  localStorage.removeItem('canePubCart');
  window.location.href = 'index.html';
}