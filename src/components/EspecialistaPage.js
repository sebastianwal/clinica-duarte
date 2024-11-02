import React from 'react';
import '../css/especialista.css';

const EspecialistaPage = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img src="img/logo.png" className="logo" alt="Logo Clínica" />
        </div>
      </header>
      <main>
        <section>
          <h2>Bienvenido Doctor</h2>
          <p>En este módulo podrás consultar tu agenda diaria y/o mensual para que tengas siempre presente la cantidad de pacientes agendados,<br />y notificar cualquier novedad en caso de que debas reprogramar alguna cita.</p><br /><br />
          <a href="Informacion_Personal" className="btn">Informacion Personal</a>
          <a href="consultar_agenda" className="btn">Consultar Agenda</a>
          <a href="Registrar_novedad" className="btn">Registrar Novedad</a>
          <a href="inicio.html" className="btn">Cerrar sesión</a>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Clinica Medical Duarte</p>
      </footer>
    </div>
  );
};

export default EspecialistaPage;
