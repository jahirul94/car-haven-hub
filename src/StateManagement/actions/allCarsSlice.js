import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
    const res = await axios.get("cars.json")
    return res.data
})

const allCarsSlice = createSlice({
    name: "allCars",
    initialState: {
        isLoading: false,
        allCars: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allCars = action.payload
            state.error = null
        });
        builder.addCase(fetchCars.rejected, (state, action) => {
            state.isLoading = false;
            state.allCars = []
            state.error = action.error.message;
        });

    }
})

export default allCarsSlice.reducer;
