import React from 'react';
import Logo from '../../assets/ThatCocktailMenuLogo.png';

const Header = () => {

    return (
        <header>
            <img className="logo" src={Logo} alt="ThatCocktail - Quicl & Easy Cocktails you can make at home" />
        </header>
    )

}

export default Header;