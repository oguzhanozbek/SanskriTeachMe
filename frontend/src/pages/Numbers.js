import React from 'react';
import VocabularyList from '../components/VocabularyList';

const numbersData = [
  {
    image: "numbers_image/zero.png",
    sound: "numbers_sound/zero.mp3",
    sanskrit: "शून्य",
    pronunciation: "Shunya",
    english: "0",
  },
  {
    image: "numbers_image/one.png",
    sound: "numbers_sound/one.mp3",
    sanskrit: "एकम्‌",
    pronunciation: "Eka",
    english: "1",
  },
  {
    image: "numbers_image/two.png",
    sound: "numbers_sound/two.mp3",
    sanskrit: "द्वि",
    pronunciation: "Dvi",
    english: "2",
  },
  {
    image: "numbers_image/three.png",
    sound: "numbers_sound/three.mp3",
    sanskrit: "त्रयः",
    pronunciation: "Tryah",
    english: "3",
  },
  {
    image: "numbers_image/four.png",
    sound: "numbers_sound/four.mp3",
    sanskrit: "चतुः",
    pronunciation: "Chatuh",
    english: "4",
  },
  {
    image: "numbers_image/five.png",
    sound: "numbers_sound/five.mp3",
    sanskrit: "पंचं",
    pronunciation: "Pancham",
    english: "5",
  },
  {
    image: "numbers_image/six.png",
    sound: "numbers_sound/six.mp3",
    sanskrit: "षष्टं",
    pronunciation: "Shat",
    english: "6",
  },
  {
    image: "numbers_image/seven.png",
    sound: "numbers_sound/seven.mp3",
    sanskrit: "सप्त",
    pronunciation: "Sapta",
    english: "7",
  },
  {
    image: "numbers_image/eight.png",
    sound: "numbers_sound/eight.mp3",
    sanskrit: "अष्ट",
    pronunciation: "Ashta",
    english: "8",
  },
  {
    image: "numbers_image/nine.png",
    sound: "numbers_sound/nine.mp3",
    sanskrit: "नवं",
    pronunciation: "Navam",
    english: "9",
  }
];

function Numbers() {
  return(
    <div className="mid-message">
      <h2>Numbers</h2>
      <div className="numbers-grid-wrapper">
        <VocabularyList title="Numbers in Sanskrit" items={numbersData} />
      </div>
      <div className="mid-message">
        <p>Want to assess your knowledge in a fun interactive way? Click below, then.</p>
        <p><a style={{color:"red", textDecoration:"None"}} href="/numbers-assessment">Numbers Knowledge Test</a></p>
      </div>
    </div>
  )
}

export default Numbers;
