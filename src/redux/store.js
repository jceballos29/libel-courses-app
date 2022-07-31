import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";
import instructorsReducer from "./features/instructorsSlice";


const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    instructors: instructorsReducer,
  }
});


export default store;