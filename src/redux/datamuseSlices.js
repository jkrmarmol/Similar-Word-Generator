import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDataDatamuse = createAsyncThunk(
    'datamuse/getDataDatamuse',
    async (arg = '', thunkAPI) => {
        const response = await fetch(`https://api.datamuse.com/words?ml=${arg}`);
        const data = await response.json();
        return data;
    }
);

const datamuseSlices = createSlice({
    name: 'datamuse',
    initialState: {
        list: [],
        status: null
    },
    extraReducers: {
        [getDataDatamuse.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getDataDatamuse.fulfilled]: (state, action) => {
            state.list = action.payload;
        },
        [getDataDatamuse.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
})

export default datamuseSlices.reducer;
export const selectDatamuse = (state) => {
    return state.datamuse.list;
}