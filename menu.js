const menuItems = [
  // Cane Juices
  { name: 'Cane Normal', price: 15, type: 'cane' },
  { name: 'Cane Lemon', price: 15, type: 'cane' },
  { name: 'Cane Ginger', price: 15, type: 'cane' },
  { name: 'Cane Lemon & Ginger', price: 20, type: 'cane' },
  { name: 'Cane Chat Masala', price: 20, type: 'cane' },
  { name: 'Cane Mint', price: 20, type: 'cane' },
  { name: 'Cane Mirchi', price: 20, type: 'cane' },
  { name: 'Cane Pepper & Salt', price: 30, type: 'cane' },
  { name: 'Cane Jaljeera', price: 30, type: 'cane' },
  // Parcels (simplified sizes/prices)
  { name: 'Lemon Parcel (Small)', price: 15, type: 'parcel' },
  { name: 'Lemon Parcel (1L)', price: 70, type: 'parcel' },
  { name: 'Ginger Parcel (Small)', price: 15, type: 'parcel' },
  { name: 'Ginger Parcel (1L)', price: 70, type: 'parcel' },
  // Add all other parcels similarly...
  { name: 'Beetroot Parcel (1L)', price: 70, type: 'parcel' },
  { name: 'Orange Parcel (1L)', price: 70, type: 'parcel' }
  // Full list: Add remaining from your menu (Carrot, Amla, etc.)
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('menu-grid');
  const filters = document.querySelectorAll('.filter-btn');

  function renderMenu(filter = 'all') {
    grid.innerHTML = '';
    menuItems.filter(item => filter === 'all' || item.type === filter).forEach(item => {
      const div = document.createElement('div');
      div.className = `menu-item ${item.type}`;
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button class="add-to-cart" onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
      `;
      grid.appendChild(div);
    });
  }

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.filter);
    });
  });

  renderMenu();
});

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('canePubCart') || '[]');
  const existing = cart.find(item => item.name === name);
  if (existing) existing.qty += 1;
  else cart.push({ name, price, qty: 1 });
  localStorage.setItem('canePubCart', JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart!`);
}