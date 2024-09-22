document.addEventListener('DOMContentLoaded', () => {
  const cartButton = document.getElementById('cart-button');
  const cart = document.getElementById('cart');
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const checkoutButton = document.getElementById('checkout-button');

  // Obtener datos del carrito desde el localStorage o inicializar vacío
  let cartData = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCart() {
    cartItems.innerHTML = '';
    cartData.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} - ${item.price} <button class="remove-from-cart" data-id="${item.id}">Eliminar</button>`;
      cartItems.appendChild(li);
    });
    cartCount.textContent = cartData.length;
  }

  function toggleCart() {
    cart.classList.toggle('show');
  }

  function addToCart(e) {
    const productElement = e.target.closest('.producto');
    const productId = productElement.dataset.id;
    const productName = productElement.querySelector('h3').textContent;
    const productPrice = productElement.querySelector('.precio').textContent;

    const product = {
      id: productId,
      name: productName,
      price: productPrice
    };

    cartData.push(product);
    localStorage.setItem('cart', JSON.stringify(cartData));
    updateCart();
  }

  function removeFromCart(e) {
    const button = e.target;
    if (!button.classList.contains('remove-from-cart')) return;

    const productId = button.dataset.id;
    cartData = cartData.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cartData));
    updateCart();
  }

  function checkout() {
    window.open('checkout.html', '_blank');
  }

  cartButton.addEventListener('click', toggleCart);
  addToCartButtons.forEach(button => button.addEventListener('click', addToCart));
  cartItems.addEventListener('click', removeFromCart);
  checkoutButton.addEventListener('click', checkout);

  updateCart();
});
