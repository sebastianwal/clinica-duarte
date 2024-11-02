function validateLogin() {
    var userType = document.getElementById("user-type").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (userType === "administrador" && username === "admin" && password === "admin123") {
        window.location.href = "admon.html";
    } else if (userType === "medico_especialista" && username === "medico" && password === "medico123") {
        window.location.href = "m_especialista.html";
    } else if (userType === "paciente" && username === "paciente" && password === "paciente123") {
        window.location.href = "paciente.html";
    } else {
        alert("Usuario o contraseña incorrectos o no está registrado");
    }
    return false;
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var toggleIcon = document.getElementById("toggle-icon");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}
