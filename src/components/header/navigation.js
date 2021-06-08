import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Navigation = () => {

    const menu = useSelector((state) => state.menu.cocktail);

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu ({Object.keys(menu).length})</Link>
        </nav>
    )

}

export default Navigation;