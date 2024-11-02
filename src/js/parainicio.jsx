function validateRegister() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmarPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return false;
    }

    return true;
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmarPassword');
    const toggleIcon = document.getElementById('toggle-icon');
    const toggleIconConfirm = document.getElementById('toggle-icon-confirm');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
    }

    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        toggleIconConfirm.classList.add('fa-eye-slash');
    } else {
        confirmPasswordInput.type = 'password';
        toggleIconConfirm.classList.remove('fa-eye-slash');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nuevoregistro').addEventListener('click', function(event) {
        event.preventDefault();

        const form = document.getElementById('register-form');
        if (form.checkValidity() && validateRegister()) {
            window.location.href = 'inicio.html';
        } else {
            form.reportValidity();
        }
    });

    document.getElementById('iniciasesion').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'inicio.html';
    });
});
