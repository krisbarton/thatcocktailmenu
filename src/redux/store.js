import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import searchReducer from './searchSlice';

export default configureStore({
    reducer: {
        menu: menuReducer,
        search: searchReducer
    }
})