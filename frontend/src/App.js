import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Numbers from './pages/Numbers';
import Homepage from './pages/Homepage';
import NumbersAssessment from './pages/NumbersAssessment';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <h1><a style={{color:"black", textDecoration:"None"}} href="/">SanskriTeachMe</a></h1>
          <nav>
            <ul>
              <li><Link to="/numbers">Numbers</Link></li>
              <li><a href="/">Verbs</a></li>
              <li><a href="/">Colors</a></li>
              <li><a href="/">Body Parts</a></li>
              <li><a href="/">Animals</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/numbers" element={<Numbers />} />
            <Route path="/numbers-assessment" element={<NumbersAssessment />} />
          </Routes>
        </main>

        <footer className='footer'>
          <p><img className='logo' src="whatsapp.png"/><a href="https://wa.me/13654440424" target='_blank'>Contact us @Whatsapp </a></p>
          <p>&#169; 2025 SanskriTeachMe. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
