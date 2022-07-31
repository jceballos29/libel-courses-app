import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';


const initialState = {
  categories: [],
  loading: false,
  error: null,
};


export const getAllCategories = createAsyncThunk(
  'categories/getAllCategories',
  async () => {
    const categories = await api.get('/categories');
    if (categories.success) {
      return categories.data;
    }
    throw new Error(categories.message);
  }
);


const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // ...reducers
  },
  extraReducers: {
    // ...extraReducers
    [getAllCategories.pending]: (state) => {
      state.loading = true;
    },
    [getAllCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    },
    [getAllCategories.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    }
  }
});


export default categoriesSlice.reducer;