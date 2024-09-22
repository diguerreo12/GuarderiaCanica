document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    // Muestra el enlace de administración solo si el usuario es un admin
    document.getElementById('admin-link').style.display = user.role === 'admin' ? 'block' : 'none';
  } else {
    // Redirige a la página de login si no hay usuario en localStorage
    window.location.href = 'login.html';
  }

  // Maneja el clic en el botón de logout
  document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
  });
});

// Maneja el formulario de login
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const user = document.getElementById('user').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
      // Busca el usuario en la lista de usuarios
      const foundUser = users.find(u => u.user === user && u.password === password);
      if (foundUser) {
        // Guarda el usuario en localStorage y redirige a la página principal
        localStorage.setItem('user', JSON.stringify(foundUser));
        window.location.href = 'index.html';
      } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        document.getElementById('error-message').textContent = 'Credenciales incorrectas';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('error-message').textContent = 'Error en la conexión';
    });
});
