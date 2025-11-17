const menuItems = [
  // Fresh Cane Juice
  { name: "Cane Normal", price: 15, category: "cane" },
  { name: "Cane Lemon", price: 15, category: "cane" },
  { name: "Cane Ginger", price: 15, category: "cane" },
  { name: "Cane Lemon & Ginger", price: 20, category: "cane" },
  { name: "Cane Chat Masala", price: 20, category: "cane" },
  { name: "Cane Mint", price: 20, category: "cane" },
  { name: "Cane Mirchi", price: 20, category: "cane" },
  { name: "Cane Pepper & Salt", price: 30, category: "cane" },
  { name: "Cane Jaljeera", price: 30, category: "cane" },
  { name: "Parcel 1 Litre (Plain)", price: 120, category: "parcel" },

  // Flavored Juices (all sizes)
  ...["Lemon","Ginger","Chat Masala","Salt & Pepper","Jal Jeera","Mint","Carrot","Beetroot","Amla","Herale Kayi","Orange","Pineapple"].map(flavor => ({
    name: `${flavor} Juice`,
    sizes: { "Small":15, "Medium":20, "Jumbo":30, "Half Litre":35, "1 Litre":70 },
    category: "flavored"
  }))
];

function renderMenu(filter = "") {
  const grid = document.getElementById("menu-grid");
  grid.innerHTML = "";
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px,1fr))";
  grid.style.gap = "2rem";

  menuItems
    .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "glass card";
      card.innerHTML = `
        <h3>${item.name}</h3>
        ${item.price ? `<p class="price">₹${item.price}</p><button class="add-cart" data-index="${index}">Add to Cart</button>` : 
          `<div class="sizes">${Object.entries(item.sizes).map(([size,price])=>`
            <div style="display:flex;justify-content:space-between;margin:0.5rem 0;">
              <span>${size}</span>
              <button class="add-cart" data-index="${index}" data-size="${size}">₹${price} - Add</button>
            </div>`).join("")}</div>`
        }
      `;
      grid.appendChild(card);
    });

  // Add to cart buttons
  document.querySelectorAll(".add-cart").forEach(btn => {
    btn.onclick = () => addToCart(menuItems[btn.dataset.index], btn.dataset.size || null);
  });
}

document.getElementById("search").addEventListener("input", e => renderMenu(e.target.value));
renderMenu();