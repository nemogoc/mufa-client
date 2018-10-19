import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Standings
                </li>
                <li>
                    Schedule
                </li>
                <li>
                    Location
                </li>
            </ul>
        )
    }
}

export default Nav;
