// src/components/ConsultaCitaPage.js
import React from 'react';
import '../css/consultar.cita.css';

const ConsultaCitaPage = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img src="img/logo.png" alt="Clínica Medical Duarte" />
        </div>
      </header>
      <main>
        <h2>Consultar Citas</h2>
        <form action="#">
          <label htmlFor="tipoDocumento">Tipo de Documento:</label>
          <select id="tipoDocumento" name="tipoDocumento">
            <option value="" disabled selected>Selecciona el tipo de documento</option>
            <option value="cedula_ciudadania">Cédula de ciudadanía</option>
            <option value="cedula_extranjera">Cédula extranjera</option>
            <option value="tarjeta_identidad">Tarjeta de identidad</option>
            <option value="registro_civil">Registro civil</option>
          </select>
          <label htmlFor="numeroDocumento">Número de Documento:</label>
          <input type="number" id="numeroDocumento" name="numeroDocumento" required />
          <button type="submit">Consultar</button>
        </form>
        <h3>Histórico de Citas</h3>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Especialidad</th>
              <th>Médico</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20/07/2024</td>
              <td>08:00:00</td>
              <td>Ortopedia</td>
              <td>Erasmo Nieto</td>
              <td>Por Cumplir</td>
            </tr>
            {/* Otros registros */}
          </tbody>
        </table>
        <button type="button" id="volver" onClick={() => window.location.href = 'paciente.html'}>Volver</button>
      </main>
      <footer>
        <p>&copy; 2024 Clínica Medical Duarte</p>
      </footer>
    </div>
  );
};

export default ConsultaCitaPage;
