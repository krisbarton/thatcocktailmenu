import React from 'react';

const CocktailDisplay = ({ name, ingredients, recipe, id }) => {

    return (
        <div className="search__results" key={id}>
            <h3>{name}</h3>
            <div className="search__results__details--hide">
                <div dangerouslySetInnerHTML={{ __html: ingredients }}></div>
                <div dangerouslySetInnerHTML={{ __html: recipe }}></div>
            </div>
        </div>
    )

}

export default CocktailDisplay;