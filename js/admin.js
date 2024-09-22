document.addEventListener('DOMContentLoaded', () => {
    const comprasTableBody = document.querySelector('#compras-table tbody');
    const cotizacionesTableBody = document.querySelector('#cotizaciones-table tbody');
  
    function fetchAndDisplayData() {
      // Simulación de la obtención de datos desde un API o servidor
      fetch('http://localhost:3000/compras')
        .then(response => response.json())
        .then(compras => {
          comprasTableBody.innerHTML = '';
          compras.forEach(compra => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${compra.id}</td>
              <td>${compra.nombre}</td>
              <td>${compra.direccion}</td>
              <td>${compra.ciudad}</td>
              <td>${compra.codigoPostal}</td>
              <td>${compra.telefono}</td>
              <td>$${compra.total.toFixed(2)}</td>
              <td>${compra.fecha}</td>
            `;
            comprasTableBody.appendChild(row);
          });
        });
  
      fetch('http://localhost:3000/cotizaciones')
        .then(response => response.json())
        .then(cotizaciones => {
          cotizacionesTableBody.innerHTML = '';
          cotizaciones.forEach(cotizacion => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${cotizacion.id}</td>
              <td>${cotizacion.nombre}</td>
              <td>${cotizacion.direccion}</td>
              <td>${cotizacion.ciudad}</td>
              <td>${cotizacion.codigoPostal}</td>
              <td>${cotizacion.telefono}</td>
              <td>$${cotizacion.total.toFixed(2)}</td>
              <td>${cotizacion.fecha}</td>
            `;
            cotizacionesTableBody.appendChild(row);
          });
        });
    
    }
  
    fetchAndDisplayData();
  
    document.getElementById('logout').addEventListener('click', () => {
      localStorage.removeItem('user');
      window.location.href = 'login.html';
    });
  });
  