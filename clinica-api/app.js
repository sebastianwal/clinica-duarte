const express = require('express');
const app = express();
const PORT = 3001;

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

let pacientes = [
    { id: 1, nombre: 'Juan Perez', diagnostico: 'Dolor de cabeza' },
    { id: 2, nombre: 'Ana Lopez', diagnostico: 'Resfriado' }
];

// Ejemplo de endpoint GET
app.get('/api/pacientes', (req, res) => {
    res.send(pacientes);
});

// Ejemplo de endpoint POST - Crear un nuevo paciente
app.post('/api/pacientes', (req, res) => {
    const nuevoPaciente = req.body;
    nuevoPaciente.id = pacientes.length + 1; // Asignar un ID único
    pacientes.push(nuevoPaciente);
    res.status(201).send({ 
        mensaje: 'Paciente creado', 
        paciente: nuevoPaciente 
    });
});

// Ejemplo de endpoint PUT - Actualizar un paciente completo
app.put('/api/pacientes/:id', (req, res) => {
    const pacienteId = parseInt(req.params.id);
    const datosActualizados = req.body;

    let paciente = pacientes.find(p => p.id === pacienteId);

    if (!paciente) {
        return res.status(404).send({ mensaje: 'Paciente no encontrado' });
    }

    // Actualizar el paciente completo
    paciente = { id: pacienteId, ...datosActualizados };
    pacientes = pacientes.map(p => (p.id === pacienteId ? paciente : p));
    res.send({ mensaje: 'Paciente actualizado', paciente });
});

// Ejemplo de endpoint PATCH - Actualizar solo el campo "diagnostico"
app.patch('/api/pacientes/:id', (req, res) => {
    const pacienteId = parseInt(req.params.id);
    const { diagnostico } = req.body;

    const paciente = pacientes.find(p => p.id === pacienteId);

    if (!paciente) {
        return res.status(404).send({ mensaje: 'Paciente no encontrado' });
    }

    // Actualizar solo el campo "diagnostico"
    paciente.diagnostico = diagnostico;
    res.send({ mensaje: 'Diagnóstico actualizado', paciente });
});

// Ejemplo de endpoint DELETE - Eliminar un paciente
app.delete('/api/pacientes/:id', (req, res) => {
    const pacienteId = parseInt(req.params.id);

    const pacienteIndex = pacientes.findIndex(p => p.id === pacienteId);
    if (pacienteIndex === -1) {
        return res.status(404).send({ mensaje: 'Paciente no encontrado' });
    }

    pacientes.splice(pacienteIndex, 1); // Eliminar paciente
    res.send({ mensaje: 'Paciente eliminado' });
});

// Ejemplo de endpoint HEAD - Verificar si un paciente existe
app.head('/api/pacientes/:id', (req, res) => {
    const pacienteId = parseInt(req.params.id);
    const existe = pacientes.some(p => p.id === pacienteId);

    if (existe) {
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
