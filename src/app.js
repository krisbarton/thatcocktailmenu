import React from 'react';

import Header from './components/header';
import Welcome from './components/welcome';
import Search from './components/search';

import { saveMenu, deleteMenu } from './components/menu/menu.actions';

//Redux and reducers here @ https://dev.to/bhatvikrant/how-to-setup-redux-with-react-2020-cdj
//React redux tutorial: https://react-redux.js.org/tutorials/quick-start
//https://www.valentinog.com/blog/redux/#react-redux-tutorial-a-minimal-react-development-environment

const App = () => {

    return (
        <>
            <Header />
            <Welcome />
            <Search />
        </>
    )

}

export default App;