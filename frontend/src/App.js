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
      <main>
        <h2>Welcome to Sanskrit Basics!</h2>
        <p>Learn basic Sanskrit vocabulary with visuals and sounds.</p>
      </main>
    </div>
  );
}

export default App;