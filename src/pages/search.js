import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CocktailDisplay from '../components/cocktails/display';

const SearchPage = () => {

    const searchResults = useSelector((state) => state.search.searchResults);
    const searchTerm = useSelector((state) => state.search.searchHistory);
    const lastSearchTerm = searchTerm[searchTerm.length - 1];

    return (
        <div className="layout search__results">
            <h1>Results for: <span>{lastSearchTerm}</span>.</h1>
            <h2><span>{searchResults.totalPosts}</span> cocktails found.</h2>
            <div className="search__results__list">
                {console.log('return searh results ', searchResults)}
                {Object.keys(searchResults).map((key, index) => {
                    const { title, ingredients, recipe } = searchResults[key];
                    if (title !== undefined) {
                        return (
                            <CocktailDisplay name={title} ingredients={ingredients} recipe={recipe} key={key} />
                        )
                    }
                })}
            </div>
        </div>
    )

}

export default SearchPage;