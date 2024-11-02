// src/components/PreguntasFrecuentesPage.js
import React from 'react';
import '../css/pregunta.frecu.css';

const PreguntasFrecuentesPage = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img src="img/logo.png" alt="Clínica Medical Duarte" />
        </div>
      </header>
      <main>
        <section id="inicio">
          <h2>Preguntas frecuentes</h2>
          <ul className="preguntas-frecuentes">
            <li>
              <h3>¿Cómo puedo programar una cita médica?</h3>
              <p>Para programar una cita médica, puede llamar a nuestro teléfono [número de teléfono] o enviar un correo electrónico a [correo electrónico]. También puede hacerlo en línea a través de nuestro sitio web: https://www.zocdoc.com/doctor/reynold-duarte-martinez-md-252701.</p>
            </li>
            <li>
              <h3>¿Cómo puedo actualizar mis datos personales?</h3>
              <p>Para actualizar sus datos personales, puede comunicarse con nosotros por teléfono, correo electrónico o en persona en nuestra clínica.</p>
            </li>
            <li>
              <h3>¿Qué debo hacer si necesito cancelar o reprogramar una cita?</h3>
              <p>Si necesita cancelar o reprogramar una cita, por favor comuníquese con nosotros con al menos 24 horas de anticipación. Puede hacerlo por teléfono, correo electrónico o en persona en nuestra clínica.</p>
            </li>
            <li>
              <h3>¿Cómo puedo obtener un resumen de mi historia clínica?</h3>
              <p>Puede solicitar un resumen de su historia clínica comunicándose con nosotros por teléfono, correo electrónico o en persona en nuestra clínica.</p>
            </li>
            <li>
              <h3>¿La Clínica Medical Duarte cuales EPS o Aseguradoras atiende?</h3>
              <p>La Clínica Medical Duarte atiende a pacientes de la mayoría de las EPS y aseguradoras. Para obtener más información, por favor consulte nuestra lista de EPS y aseguradoras en nuestro sitio web: https://www.zocdoc.com/doctor/reynold-duarte-martinez-md-252701.</p>
            </li>
            <li>
              <h3>¿Cómo puedo realizar una queja o sugerencia?</h3>
              <p>Si tiene una queja o sugerencia, puede comunicarse con nosotros por teléfono, correo electrónico o en persona en nuestra clínica. También puede enviar una queja o sugerencia en línea a través de nuestro sitio web: https://www.zocdoc.com/doctor/reynold-duarte-martinez-md-252701.</p>
            </li>
            <li>
              <h3>¿Qué medidas de seguridad y privacidad toman con mis datos personales?</h3>
              <p>La Clínica Medical Duarte toma muy en serio la seguridad y privacidad de sus datos personales. Implementamos una serie de medidas de seguridad para proteger sus datos, incluyendo el cifrado de datos, el control de acceso y la protección contra intrusiones.</p>
            </li>
            <li>
              <h3>¿Qué documentos necesito para mi primera visita?</h3>
              <p>Para su primera visita, por favor traiga su documento de identidad, tarjeta de EPS o seguro médico y cualquier otro documento relevante para su cita.</p>
            </li>
            <li>
              <h3>¿Cuáles son las especialidades médicas disponibles en la Clínica?</h3>
              <p>La Clínica Medical Duarte ofrece una amplia gama de especialidades médicas, incluyendo medicina general, pediatría, ginecología, obstetricia, cardiología, dermatología, gastroenterología, neurología y ortopedia. Para obtener más información sobre nuestras especialidades, por favor consulte nuestro sitio web: https://www.zocdoc.com/doctor/reynold-duarte-martinez-md-252701.</p>
            </li>
            <li>
              <h3>Registra aquí tu pregunta <input type="text" id="pregunta-input" /></h3>
              <button type="button" id="enviar-pregunta" style={{ display: 'none' }}>Enviar pregunta</button>
            </li>
          </ul>
        </section>
        <button type="button" id="volver" onClick={() => window.location.href = 'paciente.html'}>Volver</button>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 Clínica Medical Duarte. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PreguntasFrecuentesPage;
