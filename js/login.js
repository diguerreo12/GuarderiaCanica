document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    document.getElementById('admin-link').style.display = user.role === 'admin' ? 'block' : 'none';
  } else {
    window.location.href = 'login.html';
  }

  document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
  });
});

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const user = document.getElementById('user').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
      const user = users.find(u => u.user === user && u.password === password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'index.html';
      } else {
        document.getElementById('error-message').textContent = 'Credenciales incorrectas';
      }
    });
});
