document.addEventListener('DOMContentLoaded', () => {
  const checkoutForm = document.getElementById('checkout-form');

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(checkoutForm);

    const data = {
      name: formData.get('nombre'),
      address: formData.get('direccion'),
      city: formData.get('ciudad'),
      zip: formData.get('codigo-postal'),
      phone: formData.get('telefono'),
      bank: formData.get('banco'),
      cardNumber: formData.get('numero-tarjeta'),
      expirationDate: formData.get('fecha-expiracion'),
      cvv: formData.get('cvv'),
      shipping: formData.get('envio'),
    };

    // Simular el proceso de pago
    setTimeout(() => {
      alert('¡Pago realizado con éxito!\n\nGracias por tu compra.');
      localStorage.removeItem('cart'); // Limpiar el carrito después del pago
      window.location.href = 'productos.html'; // Redirigir al catálogo de productos
    }, 1000); // Simulación de espera de 1 segundo
  });
});
