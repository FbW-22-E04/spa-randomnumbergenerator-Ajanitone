import React from "react";
import { useState } from "react";

function newRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function RandomList() {
  const [randomNumbers, setRandomNumbers] = useState([]);

  return (
    <div>
      <button
        onClick={() => {
          setRandomNumbers([...randomNumbers, newRandomNumber()]);
        }}
      >
        New Random Number
      </button>
      <ul>
        {randomNumbers.map((num, idx) => (
          <li key={idx}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default RandomList;
