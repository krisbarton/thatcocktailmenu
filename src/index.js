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
    - View Menu: 
    - Remove items from menu, in menu view: DONE!
    - Menu link item count (i.e. how many cocktails do I have in my menu?): DONE!
    - Add Redux slice for serach history and results: DONE!
    - Move search results to new view: DONE!
    - Do styles for app.
    - Do animations.
    - Do SRC SET component for images.
    - Work on PDF bundler.
    - Make PDF links available forever?

    V2
    - Mobile menu options at the bottom on the page after scroll - just with icons
    - Clickable to resuseable Search History.
    - Random cocktail display.
    - Add ingredients to WordPress api to get list of ingredients needed for entire menu.
    - Sharing options.
    - Login options.
    - Alcohol deals.
    - Investigate React optimisation using React.lazy()

*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);