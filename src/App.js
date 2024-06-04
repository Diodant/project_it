import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import AboutUs from './components/AboutUs';
import Documents from './components/Documents';
import Statute from './components/Statute';
import Codex from './components/Codex';
import Medal from './components/Medal';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div >
        <Navigation />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/statute" element={<Statute />} />
          <Route path="/codex" element={<Codex />} />
          <Route path="/medal" element={<Medal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
