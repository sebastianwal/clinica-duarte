// src/components/HomePage.js
import React from 'react';
import '../css/css.css';
import { validateLogin, togglePasswordVisibility } from '../js/functions';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img src="/img/logo.png" className="logo" alt="logo clinica" />
        </div>
      </header>

      <main>
        <div className="container">
          <section className="information">
            <h2>Bienvenido a la Clínica Duarte</h2>
            <p>Estamos encantados de que hayas elegido nuestra aplicación para gestionar tus citas médicas de manera rápida y sencilla.</p>
            <p>Aquí podrás reservar citas con nuestros especialistas, recibir recordatorios de tus próximas citas. Nuestro objetivo es brindarte una atención médica de calidad y personalizada, asegurando que tengas toda la información que necesitas al alcance de tu mano.</p>
          </section>
        </div>
        <div className="container">
          <section className="login">
            <h2>Iniciar sesión</h2><br />
            <form onSubmit={(e) => { e.preventDefault(); validateLogin(); }}>
              <div className="form-group">
                <label htmlFor="user-type">Tipo de Usuario:</label>
                <select id="user-type" name="user-type" required>
                  <option value="" disabled selected>Selecciona el usuario</option>
                  <option value="medico_especialista">Medico especialista</option>
                  <option value="administrador">Administrador</option>
                  <option value="paciente">Paciente</option>
                </select><br />
              </div>
              <div className="form-group">
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" name="username" required placeholder="admin/medico/paciente" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <div style={{ position: 'relative' }}>
                  <input type="password" id="password" name="password" required placeholder="admin123/medico123/paciente123" />
                  <span className="toggle-password" onClick={togglePasswordVisibility}><i className="far fa-eye" id="toggle-icon"></i></span>
                </div>
              </div>
              <button type="submit">Ingresar</button>
            </form>

            <p>¿No está registrado? <Link to="/registro" id="register-link">Registrarse</Link></p>
          </section>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Clinica Medical Duarte. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
