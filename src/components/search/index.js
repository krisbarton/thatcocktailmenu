import React, { useRef, useState } from 'react';
import axios from 'axios';

import Results from './results';

const Search = () => {

    const searchRef = useRef(null);
    const [searchResults, setSearchResults] = useState({ cocktails: null, isLoaded: false });

    const doSearch = () => {
        const input = searchRef.current;
        console.log("gonna do a search now. Search ref is ", input.value);

        axios.get(`https://www.thatcocktail.com/wp-json/articles/search?s=${input.value}`)
            .then((response) => {
                console.log(response.data);
                setSearchResults({ cocktails: response.data, isLoaded: true });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <>
            <input type="text" name="cocktail" ref={searchRef} />
            <button onClick={doSearch}>Search</button>

            {searchResults.isLoaded === true ? <Results data={searchResults.cocktails} /> : ""}
        </>
    )

}

export default Search;