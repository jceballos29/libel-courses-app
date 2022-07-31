import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';


const initialState = {
  instructors: [],
  loading: false,
  error: null,
};


export const getAllInstructors = createAsyncThunk(
  'instructors/getAllInstructors',
  async () => {
    const instructors = await api.get('/instructors');
    if (instructors.success) {
      return instructors.data;
    }
    throw new Error(instructors.message);
  }
);


const instructorsSlice = createSlice({
  name: 'instructors',
  initialState,
  reducers: {
    // ...reducers
  },
  extraReducers: {
    // ...extraReducers
    [getAllInstructors.pending]: (state) => {
      state.loading = true;
    },
    [getAllInstructors.fulfilled]: (state, action) => {
      state.instructors = action.payload;
      state.loading = false;
    },
    [getAllInstructors.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    }
  }
});


export default instructorsSlice.reducer;
