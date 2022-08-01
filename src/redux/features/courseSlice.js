import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  currentCourse: null,
  loading: false,
  error: null,
};


export const fetchCourse = createAsyncThunk(
  'courses/getAllCourses',
  async (slug) => {
    try {
      const {data: course} = await axios.get(`/courses/${slug}`);
      return course.data;
    } catch (err) {
      return err.response.data;
    }
  }
);


const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    // ...reducers
  },
  extraReducers: {
    // ...extraReducers
    [fetchCourse.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCourse.fulfilled]: (state, action) => {
      state.currentCourse = action.payload;
      state.loading = false;
    },
    [fetchCourse.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    }
  }
});


export default coursesSlice.reducer;