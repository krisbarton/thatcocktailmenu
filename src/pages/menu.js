import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/menuSlice';

import CocktailDisplay from '../components/cocktails/display';

const MenuPage = () => {

    const menu = useSelector((state) => state.menu.cocktail);
    const dispatch = useDispatch();

    return (
        <div className="layout">
            <h1>Your Menu</h1>
            {Object.keys(menu).map((key, index) => {
                if (menu[key].title !== undefined) {
                    const { title, ingredients, recipe } = menu[key];
                    return (
                        <>
                            <CocktailDisplay name={title} ingredients={ingredients} recipe={recipe} id={key} />
                            <button aria-label="Remove Cocktail from your menu!" onClick={() => dispatch(removeItem(title))}>Remove Recipe</button>
                        </>
                    )
                }
            })}
        </div>

    )

}

export default MenuPage;