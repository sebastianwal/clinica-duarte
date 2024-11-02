
import React from 'react';
import '../css/css.paciente.css';

const PacientePage = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img src="img/logo.png" alt="Clínica Medical Duarte" />
        </div>
      </header>
      <main>
        <section className="informacion-personal">
          <h2>Información personal</h2>
          <p>Te recordamos que la confidencialidad de la información está garantizada, permitiéndote acceder únicamente a tus datos personales y grupo familiar.</p>
          <a href="informacionp.html" className="btn">Consultar información personal</a>
        </section>

        <section className="solicitar-cita">
          <h2>Solicitar cita</h2>
          <p>Agenda tu cita de manera segura y cómoda desde tu hogar o lugar de trabajo.</p>
          <a href="solicitar.citas.html" className="btn">Solicitar cita</a>
        </section>

        <section className="consultar-cita">
          <h2>Consultar cita</h2>
          <p>Visualiza y gestiona tus citas programadas en nuestra clínica.</p>
          <a href="consultar.cita.html" className="btn">Consultar cita</a>
        </section>

        <section className="preguntas-frecuentes">
          <h2>Preguntas frecuentes</h2>
          <p>Encuentra respuestas a tus dudas sobre nuestros servicios y procedimientos.</p>
          <a href="preguntas-frecuentes.html" className="btn">Preguntas frecuentes</a>
        </section>
        <a href="inicio.html" className="btn">Cerrar sesión</a>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Clínica Medical Duarte. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PacientePage;
