import React, { useRef } from 'react';

const Search = () => {

    const searchRef = useRef(null);

    const doSearch = () => {
        const input = searchRef.current;
        console.log("gonna do a search now. Search ref is ", input.value);
    }

    return (
        <>
            <input type="text" name="cocktail" ref={searchRef} />
            <button onClick={doSearch}>Search</button>
        </>
    )

}

export default Search;