// src/components/UpdateForm.js
import React from 'react';
import '../css/actualizacion.css';
import { validateRegister, togglePasswordVisibility } from '../js/functions';

const UpdateForm = () => {
  return (
    <main>
      <div className="container">
        <section className="register">
          <h2>Actualización de datos</h2>
          <p>Completa el siguiente formulario para actualizar tus datos.</p>
          <form id="register-form" onSubmit={(e) => { e.preventDefault(); validateRegister(); }}>
            <div className="form-group">
              <label htmlFor="nombre">Nombres:</label>
              <input type="text" id="nombre" name="nombre" placeholder="Ingresa tus nombres completos" required />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos:</label>
              <input type="text" id="apellidos" name="apellidos" placeholder="Ingresa tus apellidos completos" required />
            </div>
            <div className="form-group">
              <label htmlFor="tipoDocumento">Tipo de documento:</label>
              <select id="tipoDocumento" name="tipoDocumento" required>
                <option value="" disabled selected>Selecciona el tipo de documento</option>
                <option value="cedula_ciudadania">Cédula de ciudadanía</option>
                <option value="cedula_extranjera">Cédula extranjera</option>
                <option value="tarjeta_identidad">Tarjeta de identidad</option>
                <option value="registro_civil">Registro civil</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="numeroDocumento">Número de documento:</label>
              <input type="number" id="numeroDocumento" name="numeroDocumento" placeholder="Ingresa el número de tu documento" required />
            </div>
            <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
              <input type="date" id="fechaNacimiento" name="fechaNacimiento" required />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo electrónico:</label>
              <input type="email" id="correo" name="correo" placeholder="Ingresa tu correo electrónico" required />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Número telefónico:</label>
              <input type="number" id="telefono" name="telefono" placeholder="Ingresa tu número telefónico" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <div className="password-container">
                <input type="password" id="password" name="password" placeholder="actual" required />
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                  <i id="toggle-icon" className="fas fa-eye"></i>
                </span>
              </div>
            </div>
            <button type="button" id="actualizar" onClick={() => { if (validateRegister()) { window.location.href = 'paciente.html'; } }}>Actualizar</button>
            <button type="button" id="volver" onClick={() => { window.location.href = 'informacionp.html'; }}>Volver</button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default UpdateForm;