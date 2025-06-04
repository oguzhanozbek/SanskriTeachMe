// DragDropAssessment.js
import React, { useState } from 'react';
import './DragDropAssessment.css';

function DragDropAssessment({ questions }) {
  const [answers, setAnswers] = useState({});
  const [correctCount, setCorrectCount] = useState(0);

  const handleDrop = (english, target) => {
    const isCorrect = questions.find(q => q.english === english && q.sanskrit === target);
    setAnswers(prev => ({ ...prev, [target]: english }));
    if (isCorrect) setCorrectCount(prev => prev + 1);
  };

  return (
    <div className="assessment-container">
      <div className="drop-zones">
        {questions.map(({ sanskrit }) => (
          <div
            key={sanskrit}
            className="drop-zone"
            onDragOver={e => e.preventDefault()}
            onDrop={e => handleDrop(e.dataTransfer.getData('text'), sanskrit)}
          >
            {answers[sanskrit] || "Drop here"}<br />
            <span className="sanskrit-label">{sanskrit}</span>
          </div>
        ))}
      </div>

      <div className="draggables">
        {questions.map(({ english }) => (
          <div
            key={english}
            className="draggable"
            draggable
            onDragStart={e => e.dataTransfer.setData('text', english)}
          >
            {english}
          </div>
        ))}
      </div>

      <div className="progress">
        Progress: {Math.round((correctCount / questions.length) * 100)}%
      </div>
    </div>
  );
}

export default DragDropAssessment;