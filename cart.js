let cart = JSON.parse(localStorage.getItem("canePubCart")) || [];

function saveCart() {
  localStorage.setItem("canePubCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById("cart-count").textContent = count;
}

function addToCart(item, size = null) {
  const name = size ? `${item.name} - ${size}` : item.name;
  const price = size ? item.sizes[size] : item.price;

  const existing = cart.find(i => i.name === name);
  if (existing) existing.qty++;
  else cart.push({ name, price, qty: 1 });

  saveCart();
  alert(`${name} added to cart!`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart(); // call on cart.html
}

updateCartCount();