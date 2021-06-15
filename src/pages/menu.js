import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/menuSlice';

import CocktailDisplay from '../components/cocktails/display';
import Search from '../components/search';

const MenuPage = () => {

    const menu = useSelector((state) => state.menu.cocktail);
    const dispatch = useDispatch();

    return (
        <div className="layout search__results">
            <div className="menu__header">
                <h1>Your Menu</h1>
                <p>Below is the list of cocktails you've saved to your menu. Ckick the remove button to remove any cocktails you no longer want in your menu.</p>
            </div>
            {
                menu.length !== 0 ?
                    Object.keys(menu).map((key, index) => {
                        if (menu[key].title !== undefined) {
                            const id = uuidv4();
                            return (
                                <>
                                    <CocktailDisplay data={menu[key]} key={id} id={uuidv4()} />
                                </>
                            )
                        }
                    })
                    :
                    <div className="menu__empty">
                        <h2>Oops! Your menu is empty!</h2>
                    </div>

            }
            <div className="menu__search">
                <h2>Find more cocktails for your menu</h2>
                <Search />
            </div>

        </div>

    )

}

export default MenuPage;