import { SAVE_MENU, DELETE_MENU } from './menu.types';

export const saveMenu = () => {

    return {
        type: SAVE_MENU
    };

};

export const deleteMenu = () => {

    return {
        type: DELETE_MENU
    };

};