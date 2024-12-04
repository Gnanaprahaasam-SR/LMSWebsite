import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import PolicyPDFs from './pages/PolicyPDFs';
import TrainingPPTs from './pages/TrainingPPTs';
import TrainingVideos from './pages/TrainingVideos';
import ViewItem from './pages/ViewItem';
import Header from './components/Header';
import './App.css';
import Policys from './pages/Policy';
import Orientations from './pages/Orientations';
import Training from './pages/Training';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/policies" element={<Policys />} />
        <Route path="/orientations" element={<Orientations />} />
        <Route path="/training" element={<Training />} />

        <Route path="/policy-pdfs" element={<PolicyPDFs />} />
        <Route path="/training-ppts" element={<TrainingPPTs />} />
        <Route path="/training-videos" element={<TrainingVideos />} />
        <Route path="/view/:type/:id" element={<ViewItem />} />
      </Routes>
    </Router>
  );
}

export default App;
