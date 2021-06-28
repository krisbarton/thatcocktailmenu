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
import SearchPage from './pages/search';
import PrintPage from './pages/print';

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
                    <Route path="/search">
                        <SearchPage />
                    </Route>
                    <Route path="/print">
                        <PrintPage />
                    </Route>
                </Switch>
            </Router>
        </>
    )

}

export default App;