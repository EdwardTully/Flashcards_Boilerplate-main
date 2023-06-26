import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCards } from "./cardsSlice";
import { useSelector } from "react-redux";

export default function Card({ id }) {
  const cards = useSelector(getCards); 
  console.log(id)
  
  const card = cards[id];
  console.log(card)
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
