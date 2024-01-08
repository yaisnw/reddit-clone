import { configureStore } from '@reduxjs/toolkit';
import userPostReducer from '../features/userPostSlice';
import searchReducer from "../features/searchSlice"
import search from '../features/searchSlice';

export const store = configureStore({
  reducer: {
    userposts: userPostReducer,
    search: search
  },
});
