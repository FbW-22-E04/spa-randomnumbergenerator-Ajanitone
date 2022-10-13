import React from "react";
import { useState } from "react";
import "./RandomList.css";

function newArray() {
  const randomArray = [];
  for (let i = 0; i < 7; i++) {
    randomArray.push(newRandomNumber());
  }
  return randomArray;
}

function newRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function RandomList() {
  const [randomNumbers, setRandomNumbers] = useState(newArray());

  let [display, setDisplay] = useState("none");

  return (
    <div>
      <div className="numbers" style={(display = { display })}>
        {randomNumbers.map((num, idx) => (
          <div key={idx}>{num}</div>
        ))}
      </div>
      <button
        onClick={() => {
          setDisplay("none");
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setDisplay("flex");
          setRandomNumbers(newArray());
        }}
      >
        Show me lucky Numbers
      </button>
    </div>
  );
}

export default RandomList;
