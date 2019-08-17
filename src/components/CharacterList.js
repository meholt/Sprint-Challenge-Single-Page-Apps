import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // setting state using data

  const [characterList, setCharacterList] = useState( [] )

  useEffect(() => {
    const getCharacters = () => {

    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacterList(response.data);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }

    getCharacters();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>{characterList.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}</h2>
    </section>
  );
}
