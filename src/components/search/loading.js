import React from 'react';

import Header from '../header/index';
import LoadingIcon from '../../assets/thatcocktail-loading.png';

const SearchLoading = () => {

    return (
        <div className="cocktail__search__loading">
            <Header />
            <div className="loading">
                <p><img src={LoadingIcon} alt="Loading..." /></p>
                <p className="loading__text"></p>
            </div>
        </div>
    )

}

export default SearchLoading;