import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import CocktailDisplay from '../components/cocktails/display';
import Search from '../components/search';

const MenuPage = () => {

    const menu = useSelector((state) => state.menu.cocktail);
    const dispatch = useDispatch();

    return (
        <div className="layout search__results">
            <div className="menu__header">
                <h1>Your Menu</h1>
                <h2>You have <span>{menu.length} cocktails</span> saved to your menu.</h2>

            </div>
            {
                menu.length !== 0 ?
                    Object.keys(menu).map((key, index) => {
                        if (menu[key].title !== undefined) {
                            return (
                                <>
                                    <CocktailDisplay data={menu[key]} key={uuidv4()} id={uuidv4()} />
                                </>
                            )
                        }
                    })
                    :
                    <div className="menu__empty">
                        <h2>Oops! Your menu is empty!</h2>
                    </div>

            }
            {
                menu.length > 0 ?
                    <div className="menu__action">
                        <p>Great! Now...</p>
                        <Link className="button" to="/print">Create a PDF Copy of your Menu</Link>
                        <p>Or...</p>
                    </div>
                    : ""
            }
            <div className="menu__search">
                <h2>Find more cocktails for your menu</h2>
                <Search />
            </div>

        </div>

    )

}

export default MenuPage;