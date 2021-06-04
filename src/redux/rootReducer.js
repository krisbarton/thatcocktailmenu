import { combineReducers } from 'redux';

import menuReducer from '../components/menu/menu.reducer';

const rootReducer = combineReducers({
    menu: menuReducer
});

export default rootReducer;