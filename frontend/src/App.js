import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="navbar">
        <h1>SanskriTeachMe</h1>
        <nav>
          <ul>
            <li><a href="/">Numbers</a></li>
            <li><a href="/">Verbs</a></li>
            <li><a href="/">Colors</a></li>
            <li><a href="/">Body Parts</a></li>
            <li><a href="/">Animals</a></li>
          </ul>
        </nav>
      </header>
      <main className='mid-component'>
        <h2>Welcome to Sanskrit Basics!</h2>
        <p>Learn basic Sanskrit vocabulary with visuals and sounds. Then, assess your knowledge with fun interactive game.</p>
      </main>
      <footer className='footer'>
        <p><img className='image' src="whatsapp.png"/><a href="https://wa.me/13654440424" target='_blank'>Contact us @Whatsapp </a></p>
        <p>&#169; 2025 SanskriTeachMe. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;