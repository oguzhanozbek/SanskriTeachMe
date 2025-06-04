import React from 'react';
import DragDropAssessment from '../components/DragDropAssessment';

const questions = [
  { english: "0", sanskrit: "शून्य" },
  { english: "1", sanskrit: "एकम्‌" },
  { english: "2", sanskrit: "द्वि" },
  { english: "3", sanskrit: "त्रयः" },
  { english: "4", sanskrit: "चतुः" },
  { english: "5", sanskrit: "पंचं" },
  { english: "6", sanskrit: "षष्टं" },
  { english: "7", sanskrit: "सप्त" },
  { english: "8", sanskrit: "अष्ट" },
  { english: "9", sanskrit: "नवं" },
];

function NumbersAssessment() {
  return (
    <div>
      <h2 className="mid-message">Numbers Knowledge Assessment</h2>
      <DragDropAssessment questions={questions} />
    </div>
  );
}

export default NumbersAssessment;
