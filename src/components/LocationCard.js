import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {

  return (
    <section className="location-list grid-view">
    <div className="location-info">
      <h1>{name}</h1>
      <p>Type: {type}</p>
      <p>Residents: {residents}</p>
      <p>Dimension: {dimension}</p>
    </div>
    </section>
  );
}
