function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-icon');
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = "password";
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
    }
  }

function validateRegister() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const tipoDocumento = document.getElementById("tipoDocumento").value;
  const numeroDocumento = document.getElementById("numeroDocumento").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const password = document.getElementById("password").value;

  if (
    nombre === "" ||
    apellidos === "" ||
    tipoDocumento === "" ||
    numeroDocumento === "" ||
    fechaNacimiento === "" ||
    correo === "" ||
    telefono === "" ||
    password === ""
  ) {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

  if (password!== "actual") {
    alert("Contraseña incorrecta.");
    return false;
  }

  return true;
}