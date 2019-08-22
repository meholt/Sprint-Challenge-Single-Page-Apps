import React from "react";
import { Menu, Tab, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {

    return (
        <section>
        <div>
            <NavLink to={'/'}>
            <Icon name='home'> Home</Icon>
            </NavLink>
        </div>
        <div>
            <NavLink to={'/characters'}>
            <Icon name='users'> Characters</Icon>
            </NavLink>
        </div>
        <div>
            <NavLink to={'/locations'}>
            <Icon name='map'> Location</Icon>
            </NavLink>
        </div>
        <div>
            <NavLink to={'/episodes'}>
            <Icon name='video camera'> Episodes</Icon>
            </NavLink>
        </div>
    </section>
        )
    };


