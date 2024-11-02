// src/js/functions.js

export function validateRegister() {
  // Lógica de validación de registro
  console.log("Validando registro...");
  return true;
}

export function validateLogin() {
  // Lógica de validación de login
  console.log("Validando login...");
  return true;
}

export function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  const toggleIcon = document.getElementById("toggle-icon");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleIcon.className = "fas fa-eye-slash";
  } else {
    passwordField.type = "password";
    toggleIcon.className = "fas fa-eye";
  }
}
