import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        cocktail: [],
    },
    reducers: {
        saveItem: (state, action) => {
            state.cocktail.push(action.payload)
        },
        removeItem: (state, action) => {
            const filtered = state.cocktail.filter((el) => { return el.title !== action.payload });
            state.cocktail = filtered;
        },
        clearMenu: (state) => {
            state.cocktail = [];
        }
    },
})

// Action creators are generated for each case reducer function
export const { saveItem, clearMenu, removeItem } = menuSlice.actions

export default menuSlice.reducer