import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchResults = createAsyncThunk("search/fetchResults", async (query) => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${query}`)
    const json = await response.json()
    return json
})

const searchSlice = createSlice({
    name: "search",
    initialState: {
        results: [],
        isLoading: false,
        error: false
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchResults.pending, (state) => {
            state.isLoading = true;
            state.error = false
        })
        .addCase(fetchResults.rejected, (state) => {
            state.error = true;
            state.isLoading = false;
        })
        .addCase(fetchResults.fulfilled, (state, action) => {
            state.error = false;
            state.isLoading = false;
            state.results = action.payload
        })
    }
})

export const selectResults = (state) => state.search.results;

export default searchSlice.reducer;