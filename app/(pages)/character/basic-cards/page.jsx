'use client';

import "./style.scss";
import toast from "react-hot-toast";
import { useState } from "react";

import { CharacterCard } from "@/components/_CharacterCard";
import { character } from "@/stats/character/character";

export default function Page() {
  const [ cards, setCards ] = useState([ 'hunter' ]);

  const addOnClick = () => {
    return () => {
      if (cards.length >= 4) {
        toast.error('You can only have 4 characters. Please remove one to add another.');
        return;
      }
      let value = document.getElementById('char-select').value;
      setCards(cards => [ ...cards, value ])
    }
  }
  const removeOnClick = (index) => {
    return () => setCards(cards => cards.filter((_, i) => i !== index))
  }

  return (
    <div className="grid grid-cols-4 gap-10 px-10">
      <div className="character-selector join">
        <select className="btn join-item" id="char-select">
          {Object.entries(character).map(([ key, value ]) =>
            <option key={key} value={key}>{value.name}</option>
          )}
        </select>
        <button className="btn join-item" onClick={addOnClick(cards, setCards)}>Add</button>
      </div>
      {cards.map((char, index) =>
        <CharacterCard key={char + index} character={character[char]} removeClick={removeOnClick(index)}/>)}
    </div>
  )
}