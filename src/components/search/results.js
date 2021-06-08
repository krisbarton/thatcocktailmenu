import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveItem, removeItem } from '../../redux/menuSlice';

import CocktailDisplay from '../cocktails/display'

const Results = ({ data }) => {

    const menu = useSelector((state) => state.menu.cocktail);
    const dispatch = useDispatch();

    return (
        <div className="search__results">
            <h3>Cocktails Found {data.totalPosts}</h3>
            {Object.keys(data).map((key, index) => {
                if (data[key].title !== undefined) {
                    const { title, ingredients, recipe } = data[key];
                    return (
                        <>
                            <CocktailDisplay name={title} ingredients={ingredients} recipe={recipe} id={key} />
                            {!menu.includes(data[key]) ?
                                <button aria-label="Save Cocktail to your menu!" onClick={() => dispatch(saveItem(data[key]))}>Save Recipe</button>
                                : <button aria-label="Remove Cocktail from your menu!" onClick={() => dispatch(removeItem(title))}>Remove Recipe</button>
                            }
                        </>
                    )
                }
            })}
        </div>
    )

}

export default Results;