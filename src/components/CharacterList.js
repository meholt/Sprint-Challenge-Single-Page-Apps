import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // setting state using data

  const [characters, setCharacters] = useState([])
  useEffect(() => {
    const getCharacters = () => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
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
      <CharacterCard key={character.id} 
        name={character.name}
        image={character.image}
        species={character.species}
        gender={character.gender}
        status={character.status}

       />
    ))}
    </div>
  );
};