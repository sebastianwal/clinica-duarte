// src/components/DatosUsuarioPage.js
import React from 'react';
import '../css/infor.per.css';

const DatosUsuarioPage = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img src="img/logo.png" alt="Clínica Medical Duarte" />
        </div>
      </header>
      <main>
        <div className="container">
          <h2>Datos de usuario</h2>
          <p>A continuación se muestran los datos registrados en nuestra plataforma.</p>
          <div className="form-group">
            <label htmlFor="nombre">Nombres: xxxxxxxxxxxxxxxxxxxxxxxxxx</label>
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos: xxxxxxxxxxxxxxxxxxxxxxxxxx</label>
          </div>
          <div className="form-group">
            <label htmlFor="tipoDocumento">Tipo de documento: Cédula de ciudadanía</label>
          </div>
          <div className="form-group">
            <label htmlFor="numeroDocumento">Número de documento: 000000000000000</label>
          </div>
          <div className="form-group">
            <label htmlFor="fechaNacimiento">Fecha de nacimiento: DD/MM/AAAA</label>
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo electrónico: XXXXXXXXX@XXXXX</label>
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Número telefónico: 00000000</label>
          </div>
          <button type="button" id="volver" onClick={() => window.location.href = 'paciente.html'}>Volver</button>
          <button type="submit" id="actualizar" onClick={() => window.location.href = 'actualizacion.d.html'}>Actualizar datos</button>
        </div>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 Clínica Medical Duarte. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default DatosUsuarioPage;
