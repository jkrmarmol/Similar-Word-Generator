import { configureStore } from "@reduxjs/toolkit";
import datamuseReducer from './datamuseSlices';

export const store = configureStore({
    reducer: {
        datamuse: datamuseReducer
    }
})