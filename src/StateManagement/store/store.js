import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "../actions/PagenationsIdSlice";
import CarsReducer from "../actions/CarsSlice";
import allCarsReducer from "../actions/allCarsSlice";


const store = configureStore({
    reducer: {
        id: PaginationReducer,
        cars: CarsReducer,
        allCars: allCarsReducer
    },
});

export default store;