import React from 'react';

const PrintDisplay = ({ data, id }) => {

    const { title, ingredients, recipe } = data;

    return (
        <div className="search__results__items print" key={id}>
            <h2>{title}</h2>
            <div className="search__results__details  search__results__details--active">
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

export default PrintDisplay;