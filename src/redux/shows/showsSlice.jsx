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
  reducers: {
    renderShowDetails: (state, action) => {
      const newState = Object.entries(state)[0][1].map((item) => {
        const show = JSON.parse(JSON.stringify(item));
        if (show.id !== action.payload) return show;
        return { ...show, detailsStatus: true };
      });
      return { ...state, showsItems: newState };
    },
  },
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

export const { renderShowDetails } = showsSlice.actions;

export default showsSlice.reducer;
