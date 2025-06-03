import React from 'react';

function VocabularyList({ items }) {
  return (
    <div className="vocab-list">
      {items.map(({ image, sound, sanskrit, pronunciation, english }, index) => (
        <div key={index} className="vocab-row">
          
          <div className="col image-col">
            <img className='numimage' src={image} alt={english} />
          </div>

          <div className="col sound-col">
            <button 
              onClick={() => new Audio(sound).play()} 
              aria-label={`Play pronunciation for ${sanskrit}`}
              className="sound-button"
            >
              🔊
            </button>
          </div>

          <div className="col text-col">
            <div className="row sanskrit-row">
              <span className="sanskrit-word">{sanskrit}</span>
            </div>
            <div className="row pronunciation-row">{pronunciation}</div>
            <div className="row english-row">{english}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VocabularyList;


