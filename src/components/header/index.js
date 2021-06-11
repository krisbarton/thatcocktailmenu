import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './navigation';

import Logo from '../../assets/ThatCocktailMenuLogo.png';

const Header = () => {

    return (
        <>
            <header>
                <Link to="/">
                    <img className="logo" src={Logo} alt="ThatCocktail - Quicl & Easy Cocktails you can make at home" />
                </Link>
                <Navigation />
            </header>
        </>
    )

}

export default Header;