import React, { useState } from 'react';

const CocktailDisplay = ({ name, ingredients, recipe, id }) => {

    const [recipeVisibility, setRecipeVisibility] = useState({ isVisible: false, icon: "+" });

    const showRecipe = () => {
        let icon = !recipeVisibility.isVisible ? "-" : "+";
        setRecipeVisibility({ isVisible: !recipeVisibility.isVisible, icon: icon });
    }

    return (
        <div className="search__results__items" key={id}>
            <h3><a onClick={showRecipe}>{name} <span>{recipeVisibility.icon}</span></a></h3>
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