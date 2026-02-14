import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchInitialSub = createAsyncThunk("userposts/fetchInitialSub", async (filter) => {
    const response = await fetch(`https://corsproxy.io/?https://www.reddit.com/r/Ultrakill/${filter}.json`);
    const json = await response.json()
    return json
})


const userPostSlice = createSlice({
    name: "userposts",
    initialState:
    {
        results: [],
        isLoading: false,
        error: false,
        filter: "top",
        expandedPosts: {}
    },
    reducers: {
        setDataAsResults: (state, action) => {
            state.results = action.payload
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        togglePostExpansion: (state, action) => {
            const postId = action.payload;
            state.expandedPosts[postId] = !state.expandedPosts[postId]
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchInitialSub.pending, (state, action) => {
            state.isLoading = true;
            state.error = false
        })
        .addCase(fetchInitialSub.rejected, (state,action) => {
            state.isLoading = false;
            state.error = true;
        })
        .addCase(fetchInitialSub.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.results = action.payload
        })
    }
});


export const {setDataAsResults, setFilter, togglePostExpansion} = userPostSlice.actions

export default userPostSlice.reducer;