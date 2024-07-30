document.getElementById('openLoginForm').addEventListener('click', function(event) {
    event.preventDefault();
    const loginFormContainer = document.getElementById('loginFormContainer');
    loginFormContainer.style.display = loginFormContainer.style.display === 'none' || loginFormContainer.style.display === '' ? 'block' : 'none';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtén el nombre de usuario y la contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica las credenciales (en un entorno real, esto se haría en un servidor)
    if (username === 'jimena' && password === 'rocky') {
        // Redirige a la página principal si las credenciales son correctas
        window.location.href = 'index.html'; 
    } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        document.getElementById('loginError').innerText = 'incorrecto';
    }
});
