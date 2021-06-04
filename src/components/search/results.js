import React from 'react';
import { connect } from 'react-redux';

import {
    saveMenu
} from '../menu/menu.actions';

const Results = ({ data }) => {

    return (
        <div className="search__results">
            <h3>Cocktails Found {data.totalPosts}</h3>
            {Object.keys(data).map((key, index) => {
                if (data[key].title !== undefined) {
                    const { title, ingredients, recipe } = data[key];
                    return <div className="search__results__recipe" key={key}>
                        <h3>{title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: ingredients }}></div>
                        <div dangerouslySetInnerHTML={{ __html: recipe }}></div>
                        <button>Save Recipe</button>
                    </div>
                }
            })}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);