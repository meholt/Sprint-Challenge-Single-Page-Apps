import React from "react";
import { Route } from "react-router-dom";

import WelcomePage from "./WelcomePage";
import LocationList from "./LocationsList";
import CharacterList from "./CharacterList";
import EpisodesList from "./EpisodesList";


const AppRouter = () => {
    return (
        <>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationList} />
        <Route path="/episodes" component={EpisodesList} />
        </>
    );
};

export default AppRouter;