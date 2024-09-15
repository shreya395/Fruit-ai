import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Chatbot from './pages/Chatbot';
import TranslatorPage from './pages/TranslatorPage';
import FAQ from './pages/FAQ'; // Ensure this matches the filename
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/TranslatorPage" element={<TranslatorPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
