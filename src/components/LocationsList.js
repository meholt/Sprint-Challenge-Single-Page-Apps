import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {

    const [locationsList, setLocationList] = useState( [] )

    useEffect(() => {
        const getLocations = () => {
            axios
                .get('https://rickandmortyapi.com/api/location/')
                .then(response => {
                    setLocationList(response.data.results);
                })
                .catch(error => {
                    console.error('Oops! Server Error.', error);
                });
        }

        getLocations();
    }, []);

    return (
        <section className="location-list grid-view">
        <h2>{locationsList.map(location => (
          <LocationCard key={location.id} 
            name={location.name}
            type={location.type}
            residents={location.residents}
            dimension={location.dimension}
            />
        ))}</h2>
      </section>
    );
}