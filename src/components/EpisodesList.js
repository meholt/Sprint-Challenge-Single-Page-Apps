import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {

    const [episodesList, setEpisodesList] = useState([])
    useEffect(() => {
        const getEpisodes =() => {
            axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(response => {
                console.log(response)
                setEpisodesList(response.data.results);
            })
            .catch(error => {
                console.error('Oops! Server Error.', error);
            });
    }

    getEpisodes();
}, []);

    return (
        <section className="episode-list grid-view">
            {episodesList.map(ep => (
                <EpisodeCard key={ep.id}
                episode={ep.episode}
                airdate={ep.air_date}
                characters={ep.characters}
                />
            ))}
        </section>
    );
};