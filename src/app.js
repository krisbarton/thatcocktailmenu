import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Header from './components/header';
import Welcome from './components/welcome';
import Search from './components/search';
import MenuPage from './pages/menu';

const App = () => {

    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Welcome />
                        <Search />
                    </Route>
                    <Route path="/menu">
                        <MenuPage />
                    </Route>
                </Switch>
            </Router>
        </>
    )

}

export default App;