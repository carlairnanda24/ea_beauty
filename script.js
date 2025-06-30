// Ambil data keranjang dari localStorage atau mulai array kosong
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Fungsi tambah produk ke keranjang
function addToCart(productName) {
  cart.push(productName);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " berhasil ditambahkan ke keranjang!");
}

// Fungsi tampilkan isi keranjang di cart.html
function displayCart() {
  const cartList = document.getElementById("cart-items");
  if (!cartList) return;

  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const hapusBtn = document.createElement("button");
    hapusBtn.textContent = "Hapus";
    hapusBtn.className = "hapus-btn";
    hapusBtn.onclick = () => {
      removeFromCart(index);
    };

    li.appendChild(hapusBtn);
    cartList.appendChild(li);
  });
}

// Fungsi hapus produk dari keranjang
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

window.addEventListener("DOMContentLoaded", displayCart);