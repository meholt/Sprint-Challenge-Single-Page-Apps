import React from "react";

export default function EpisodeCard({ episode, airdate, characters}) {

    return (
        <section className="episode-list grid-view">
            <div className="episode-info">
            <h1>Title: {episode}</h1>
            <p>Airdate: {airdate}</p>
            <p>Number of Characters: {characters}</p>

            </div>
        </section>
    );
}