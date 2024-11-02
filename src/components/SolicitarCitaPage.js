// src/components/SolicitarCitaPage.js
import React from 'react';
import '../css/solicitar.cita.css';

const SolicitarCitaPage = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img src="img/logo.png" className="logo" alt="Logo Clínica" />
        </div>
      </header>
      <main>
        <section className="solicitar-citas">
          <h2>Solicitar Citas</h2>
          <form action="#" id="solicitar-citas-form">
            <div className="form-group">
              <label htmlFor="especialidad">Especialidad Requerida:</label>
              <select name="especialidad" id="especialidad" aria-label="Especialidad Requerida" required>
                <option value="">Seleccione una especialidad</option>
                <option value="medicina-general">Medicina General</option>
                <option value="pediatria">Pediatría</option>
                <option value="fisiatria">Fisiatría</option>
                <option value="ginecologia">Ginecología</option>
                <option value="traumatologia">Traumatología</option>
                <option value="odontologia">Odontología</option>
                <option value="ortopedia">Ortopedia</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fecha">Fecha y Hora de acuerdo a disponibilidad:</label>
              <div className="calendar">
                <h3>Calendario</h3>
                <div className="calendar-header">
                  <span className="prev-month" data-month="-1">&lt;</span>
                  <span className="month" data-month="0">Julio 2024</span>
                  <span className="next-month" data-month="1">&gt;</span>
                </div>
                <div className="calendar-body" id="calendar-body">
                  {/* Aquí se generarán los días del calendario */}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="hora">Hora de acuerdo a disponibilidad:</label>
              <select name="hora" id="hora" aria-label="Hora de acuerdo a disponibilidad" required>
                <option value="">Seleccione una hora</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </select>
            </div>

            <button type="submit">Solicitar Cita</button>
            <button type="button" id="volver" onClick={() => window.location.href = 'paciente.html'}>Volver</button>
          </form>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 Clínica Medical Duarte. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default SolicitarCitaPage;
