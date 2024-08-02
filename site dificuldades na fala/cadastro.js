document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    window.location.href = `index.html?usuario=${encodeURIComponent(usuario)}`;
});

const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
