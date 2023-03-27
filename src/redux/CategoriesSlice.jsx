import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  categoriesItems: [],
  isLoading: true,
};

const defaultURL = 'https://api.spacexdata.com/v3/missions';
const myAPIKey = '3b31c3d5b4eddc33bbe83b08894f736b';
console.log(myAPIKey);

export const fetchCategoriesFromAPI = createAsyncThunk(
  'categories/fetchCategoriesFromAPI',
  async () => {
    const request = await fetch(defaultURL);
    const response = await request.data;
    console.log(response);
    return response;
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesFromAPI.pending, (state) => ({
        ...state,
      }))
      .addCase(fetchCategoriesFromAPI.fulfilled, (state, action) => ({
        ...state,
        categoriesItems: Object.entries(action.payload).map((item) => {
          const category = { ...item };
          console.log(category);
          return category;
        }),
        isLoading: false,
      }))
      .addCase(fetchCategoriesFromAPI.rejected, (state) => ({
        ...state,
      }));
  },
});

export default categoriesSlice.reducer;
