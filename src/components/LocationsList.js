import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LocationsList() {

    const [locationList, setLocationList] = useState( [] )

    useEffect(() => {
        const getLocations = () => {
            axios
                .get('https://rickandmortyapi.com/api/location/')
                .then(response => {
                    setLocationList(response.data);
                })
                .catch(error => {
                    console.error('Oops! Server Error.', error);
                });
        }

        getLocations();
    }, []);

    return (
        <section className="location-list grid-view">
        <h2>{locationList.map(location => (
          <LocationDetails key={location.id} location={location} />
        ))}</h2>
      </section>
    );
}