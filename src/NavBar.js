import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return (
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">A propos</Link></li>
            <li><Link to="/tweets">Tweets</Link></li>
        </ul>
    )
}

export default NavBar;