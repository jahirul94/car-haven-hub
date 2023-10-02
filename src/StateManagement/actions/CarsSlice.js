import { createSlice } from '@reduxjs/toolkit';

const CarsSlice = createSlice({
    name: 'cars',
    initialState: [],
    reducers: {
        setCars: (state, action) => {
            return action.payload;
        },
    },
});

export const { setCars } = CarsSlice.actions;
export default CarsSlice.reducer;