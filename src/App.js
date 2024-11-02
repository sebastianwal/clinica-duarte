import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UpdateForm from './components/UpdateForm';
import AdminPage from './components/AdminPage';
import ConsultaCitaPage from './components/ConsultaCitaPage';
import PacientePage from './components/PacientePage';
import EspecialistaPage from './components/EspecialistaPage';
import RegistroPage from './components/RegistroPage';
import SolicitarCitaPage from './components/SolicitarCitaPage';
import PreguntasFrecuentesPage from './components/PreguntasFrecuentesPage';
import DatosUsuarioPage from './components/DatosUsuarioPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/update" element={<UpdateForm />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/consulta-cita" element={<ConsultaCitaPage />} />
        <Route path="/paciente" element={<PacientePage />} />
        <Route path="/especialista" element={<EspecialistaPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/solicitar-cita" element={<SolicitarCitaPage />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentesPage />} />
        <Route path="/datos-usuario" element={<DatosUsuarioPage />} />
      </Routes>
    </Router>
  );
};

export default App;
