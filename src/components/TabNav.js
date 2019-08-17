import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
<Menu>
    <Tab>
        <NavLink to='/components/WelcomePage.js'>
        <Icon name='home' /> Home Page
        </NavLink>
    </Tab>
    <Tab>
        <NavLink to='/components/Characters.js'>
        <Icon name='users' /> Characters
        </NavLink>
    </Tab>
    <Tab>
        <NavLink to='/components/Locations.js'>
        <Icon name='map' /> Location
        </NavLink>
    </Tab>
    <Tab>
        <NavLink to='/components/Episodes.js'>
        <Icon name='video camera' /> Episodes
        </NavLink>
    </Tab>
</Menu>
};
