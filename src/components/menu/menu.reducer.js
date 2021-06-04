import { SAVE_MENU, DELETE_MENU } from './menu.types';

const INITIAL_STATE = {
    menu: null
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SAVE_MENU:
            return {
                ...state, menu: state.menu
            };
        case DELETE_MENU:
            return {
                ...state, menu: null
            }
        default: return state;
    }

};

export default reducer;