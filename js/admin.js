document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');

  logoutButton.addEventListener('click', () => {
    // Eliminar los datos del usuario del localStorage
    localStorage.removeItem('user');
    // Redirigir al usuario a la página de login
    window.location.href = 'login.html';
  });
  
  // Cargar y mostrar datos de compras y cotizaciones (esto es solo un ejemplo, adapta según tu lógica)
  const comprasTable = document.getElementById('compras-table').getElementsByTagName('tbody')[0];
  const cotizacionesTable = document.getElementById('cotizaciones-table').getElementsByTagName('tbody')[0];
  
  // Función para cargar datos (aquí deberías implementar la lógica para cargar datos reales)
  function loadData() {
    // Ejemplo de datos de compras
    const compras = [
      { id: 1, nombre: 'Juan Pérez', direccion: 'Calle Falsa 123', ciudad: 'Ciudad X', cp: '12345', telefono: '555-1234', total: '$100.00', fecha: '2024-09-22' },
      // Añadir más datos aquí
    ];
    
    // Ejemplo de datos de cotizaciones
    const cotizaciones = [
      { id: 1, nombre: 'Ana Gómez', direccion: 'Avenida Siempre Viva 456', ciudad: 'Ciudad Y', cp: '67890', telefono: '555-5678', total: '$50.00', fecha: '2024-09-21' },
      // Añadir más datos aquí
    ];
    
    // Rellenar tabla de compras
    compras.forEach(compra => {
      const row = comprasTable.insertRow();
      row.insertCell(0).textContent = compra.id;
      row.insertCell(1).textContent = compra.nombre;
      row.insertCell(2).textContent = compra.direccion;
      row.insertCell(3).textContent = compra.ciudad;
      row.insertCell(4).textContent = compra.cp;
      row.insertCell(5).textContent = compra.telefono;
      row.insertCell(6).textContent = compra.total;
      row.insertCell(7).textContent = compra.fecha;
    });
    
    // Rellenar tabla de cotizaciones
    cotizaciones.forEach(cotizacion => {
      const row = cotizacionesTable.insertRow();
      row.insertCell(0).textContent = cotizacion.id;
      row.insertCell(1).textContent = cotizacion.nombre;
      row.insertCell(2).textContent = cotizacion.direccion;
      row.insertCell(3).textContent = cotizacion.ciudad;
      row.insertCell(4).textContent = cotizacion.cp;
      row.insertCell(5).textContent = cotizacion.telefono;
      row.insertCell(6).textContent = cotizacion.total;
      row.insertCell(7).textContent = cotizacion.fecha;
    });
  }
  
  loadData();
});
