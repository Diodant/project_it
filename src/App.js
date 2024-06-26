import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import AboutUs from './components/AboutUs';
import Documents from './components/Documents';
import Statute from './components/Statute';
import Codex from './components/Codex';
import Medal from './components/Medal';
import Members from './components/Members';
import Publications from './components/Publications';
import PublicationDetail from './components/PublicationDetail';
import Contacts from './components/Contacts';
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
          <Route path="/members" element={<Members />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publication/:id" element={<PublicationDetail />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
