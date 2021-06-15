import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveItem, removeItem } from '../../redux/menuSlice';

const CocktailDisplay = ({ data, id }) => {

    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu.cocktail);
    const [recipeVisibility, setRecipeVisibility] = useState({ isVisible: false, icon: "+" });

    const showRecipe = () => {
        let icon = !recipeVisibility.isVisible ? "-" : "+";
        setRecipeVisibility({ isVisible: !recipeVisibility.isVisible, icon: icon });
    }

    const { title, ingredients, recipe } = data;

    return (
        <div className="search__results__items" key={id}>
            <h3>
                {!menu.filter((e) => { return e.title === title }).length > 0 ?
                    <button aria-label="Save Cocktail to Menu!" onClick={() => dispatch(saveItem(data))}>Add</button> :
                    <button aria-label="Remove Cocktail to Menu!" className="remove" onClick={() => dispatch(removeItem(title))}>Remove</button>
                }
                <a onClick={showRecipe}>
                    {title}
                    <span>{recipeVisibility.icon}</span>
                </a>
            </h3>
            <div className={!recipeVisibility.isVisible ?
                "search__results__details"
                : "search__results__details search__results__details--active"}>
                <div className="search__results__item">
                    <h4>Ingredients</h4>
                    <div dangerouslySetInnerHTML={{ __html: ingredients.trim() }}></div>
                </div>
                <div className="search__results__item">
                    <h4>Recipe</h4>
                    <div dangerouslySetInnerHTML={{ __html: recipe.trim() }}></div>
                </div>
            </div>
        </div>
    )

}

export default CocktailDisplay;