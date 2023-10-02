import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "../actions/PagenationsIdSlice";


const store = configureStore({
    reducer: {
        id: PaginationReducer,
    },
});

export default store;