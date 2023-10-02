import { createSlice } from '@reduxjs/toolkit';

const paginationIdSlice = createSlice({
    name: 'id',
    initialState: 1,
    reducers: {
        setId: (state, action) => {
            return action.payload;
        },
    },
});

export const { setId } = paginationIdSlice.actions;
export default paginationIdSlice.reducer;