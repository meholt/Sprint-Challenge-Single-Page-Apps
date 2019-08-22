import React from "react";

export default function CharacterCard({ image, name, species, gender, status }) {

    return (
      <section className="character-list grid-view">
        <div className="character-info">
          <img src={image} alt={name} />
          <h3>Name: {name}</h3>
          <h4>Species: {species}</h4>
          <h4>Gender: {gender}</h4>
          <h4>Status: {status}</h4>
        </div>
      
    </section>

    )
};
