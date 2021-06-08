import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './app';

import './assets/styles.scss';

/*

Further features:

    - Add Routing: DONE!
    - Add navigation component: DONE!
    - View Menu: DONE!
    - Remove items from menu, in menu view: DONE!
    - Menu link item count (i.e. how many cocktails do I have in my menu?): DONE!
    - Do styles for app.
    - Do animations.

    V2
    - Clickable to resuseable Search History.
    - Random cocktail display.
    - Add ingredients to WordPress api to get list of ingredients needed for entire menu.
    - Sharing options.
    - Login options.
    - Alcohol deals.

*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);