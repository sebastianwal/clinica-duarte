
import React from 'react';
import '../css/admon.css';

const AdminPage = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img src="img/logo.png" className="logo" alt="Logo Clínica" />
        </div>
      </header>
      <main>
        <section>
          <h2>Administración del Sistema</h2>
          <a href="Configuración_de_Usuarios" className="btn">Configuración de Usuarios</a>
          <a href="Configuración_de_Pacientes" className="btn">Pacientes</a>
          <a href="Configuración_de_Medicos" className="btn">Medicos</a>
          <a href="Configuración_de_Agenda" className="btn">Agenda</a>
          <a href="Configuración_de_soporte" className="btn">Soportes</a>
          <a href="Configuración_de_Reportes" className="btn">Reportes</a>
          <a href="inicio.html" className="btn">Cerrar sesión</a>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Clinica Medical Duarte</p>
      </footer>
    </div>
  );
};

export default AdminPage;
