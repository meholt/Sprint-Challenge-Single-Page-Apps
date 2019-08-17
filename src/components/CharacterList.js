import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // setting state using data

  const [characters, setCharacters] = useState([])
  useEffect(() => {
    const getCharacters = () => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }

    getCharacters();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <div>
    {characters.map(character => (
      <CharacterDetails key={character.id} character={character} />
    ))}
    </div>
  );
}

function CharacterDetails({ character }) {
  const { image, name, species, gender, status } = character;
  return (
    <section className="character-list grid-view">
      <div className="character-info">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>{species}</h4>
        <h4>{gender}</h4>
        <h4>{status}</h4>
      </div>
    
  </section>


  )
};