document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkout-form');
  
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevenir el envío por defecto del formulario
  
      const formData = new FormData(checkoutForm);
  
      const data = {
        name: formData.get('name'),
        address: formData.get('address'),
        city: formData.get('city'),
        zip: formData.get('zip'),
        payment: formData.get('payment'),
      };
  
      // Simular el proceso de pago
      setTimeout(() => {
        alert('¡Pago realizado con éxito!\n\nGracias por tu compra.');
        localStorage.removeItem('cart'); // Limpiar el carrito
        window.location.href = 'productos.html'; // Redirigir al catálogo de productos
      }, 1000); // Simulación de un tiempo de espera para el pago
    });
  });
  