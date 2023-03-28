import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  showsItems: [],
  isLoading: true,
};

const defaultURL = 'https://api.tvmaze.com/shows';

export const fetchShowsFromAPI = createAsyncThunk(
  'shows/fetchShowsFromAPI',
  async () => {
    const request = await fetch(defaultURL);
    const response = await request.json();
    console.log(response);
    return response;
  },
);

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setValue: (state, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShowsFromAPI.pending, (state) => ({
        ...state,
      }))
      .addCase(fetchShowsFromAPI.fulfilled, (state) => ({
        ...state,
        // categoriesItems: Object.entries(action.payload).map((item) => {
        //   const category = { ...item };
        //   console.log(category);
        //   return category;
        // }),
        // isLoading: false,
      }))
      .addCase(fetchShowsFromAPI.rejected, (state) => ({
        ...state,
      }));
  },
});

export const { setValue } = showsSlice.actions;

export default showsSlice.reducer;
