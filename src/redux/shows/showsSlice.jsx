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
    return response;
  },
);

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShowsFromAPI.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchShowsFromAPI.fulfilled, (state, action) => ({
        ...state,
        showsItems: Object.entries(action.payload).map((item) => {
          const show = { ...item[1] };
          return show;
        }),
        isLoading: false,
      }))
      .addCase(fetchShowsFromAPI.rejected, (state) => ({
        ...state,
        isLoading: true,
      }));
  },
});

// export const { setValue } = showsSlice.actions;

export default showsSlice.reducer;
