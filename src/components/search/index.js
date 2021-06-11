import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Results from './results';
import SearchLoading from './loading';
import { useDispatch, useSelector } from 'react-redux';
import { saveSearchResults, saveSearchTerm } from '../../redux/searchSlice';

const Search = () => {

    const searchRef = useRef(null);
    const [searchResults, setSearchResults] = useState({ isLoaded: false, isLoading: false });
    const results = useSelector((state) => state.search.searchResults);
    const dispatch = useDispatch();


    const doSearch = (e) => {
        const input = searchRef.current;
        setSearchResults({ isLoading: true });

        axios.get(`https://www.thatcocktail.com/wp-json/articles/search?s=${input.value}`)
            .then((response) => {
                setSearchResults({ isLoaded: true, isLoading: false });
                dispatch(saveSearchResults(response.data));
                dispatch(saveSearchTerm(input.value));
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <div className="layout cocktail__search">
            <input type="text" name="cocktail" ref={searchRef} placeholder="Enter a cocktail name, alcohol, or mixer to get started" onKeyDown={(e) => { e.key === 'Enter' ? doSearch(e) : '' }} />
            <button onClick={(e) => { doSearch(e) }}>Search for Cocktails</button>

            {searchResults.isLoading === true ? <SearchLoading /> : ''}
            {searchResults.isLoaded === true ? <Redirect to="/search" push /> : ""}
        </div>
    )

}

export default Search;