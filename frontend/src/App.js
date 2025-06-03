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
        <h2 className='mid-component'>Welcome to SanskriTeachMe!</h2>
        <p className='mid-component'>Learn basic Sanskrit vocabulary with visuals and sounds. Then, assess your knowledge with fun interactive game.</p>
      
      <div className="row">
        <img className="image" src="/sanskrit.jpg" alt="Sanskrit" />
        <div className="text-block">
          <h2>About Sanskrit</h2>
          <p> Sanskrit is the sacred language of Hinduism and has been used for philosophical and religious texts in Hinduism, </p>
          <p> Buddhism, and Jainism. It continues to be widely used as a ceremonial and ritual language in Hindu and  </p> 
          <p> Buddhist hymns and chants while it dates back to 2nd millennium BC which spanned the years 2000 BC to 1001BC. </p> 
        </div>
      </div>

      <div className="row">
        <img className="image" src="/kalidasa.jpg" alt="Kalidasa" />
        <div className="text-block">
          <h2>Interesting facts regarding Sanskrit</h2>
          <ul>
            <li>Kālidāsa, the greatest dramatist wrote in Sanskrit.</li>
            <li>The foundations of modern arithmetic were first described in Sanskrit.</li>
            <li>There are no first-language speakers of Sanskrit in India.</li>
            <li>It was codified by the ancient linguist Panini around 500 BCE in his work Ashtadhyayi. Panini’s grammar is 
                so comprehensive and algorithmic that many modern linguists and computer scientists regard it as one of the earliest 
                examples of a formal language system, influencing the development of computer languages centuries later!
            </li>
          </ul>
        </div>
      </div>

      </main>
      <footer className='footer'>
        <p><img className='logo' src="whatsapp.png"/><a href="https://wa.me/13654440424" target='_blank'>Contact us @Whatsapp </a></p>
        <p>&#169; 2025 SanskriTeachMe. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;