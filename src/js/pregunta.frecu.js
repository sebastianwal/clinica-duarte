const preguntaInput = document.getElementById('pregunta-input');
  const enviarPreguntaButton = document.getElementById('enviar-pregunta');

  preguntaInput.addEventListener('input', () => {
    if (preguntaInput.value !== '') {
      enviarPreguntaButton.style.display = 'block';
    } else {
      enviarPreguntaButton.style.display = 'none';
    }
  });