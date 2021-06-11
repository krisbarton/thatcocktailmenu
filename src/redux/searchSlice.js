import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchHistory: [],
        searchResults: [],
    },
    reducers: {
        saveSearchTerm: (state, action) => {
            state.searchHistory.push(action.payload);
        },
        saveSearchResults: (state, action) => {
            state.searchResults = action.payload;
        }
    },
});

export const { saveSearchTerm, saveSearchResults } = searchSlice.actions;

export default searchSlice.reducer