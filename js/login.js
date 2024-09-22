document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('user').value;
  const password = document.getElementById('password').value;

  // Cargar el archivo JSON
  fetch('users.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el archivo de usuarios');
      }
      return response.json();
    })
    .then(users => {
      const user = users.find(u => u.user === username && u.password === password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        if (user.role === 'admin') {
          window.location.href = 'admin.html';
        } else {
          window.location.href = 'index.html';
        }
      } else {
        document.getElementById('error-message').textContent = 'Credenciales incorrectas';
      }
    })
    .catch(error => {
      console.error('Error al cargar el archivo de usuarios:', error);
      document.getElementById('error-message').textContent = 'Error al iniciar sesión. Inténtalo de nuevo más tarde.';
    });
});
