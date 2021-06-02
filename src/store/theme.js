import { createSlice } from '@reduxjs/toolkit';

let theme = localStorage.getItem('theme');

if (!theme) {
  const mediaQueryList = window.matchMedia('(prefers-color-scheme: light');

  if (mediaQueryList.matches) {
    theme = 'lightTheme';
  } else {
    theme = 'darkTheme';
  }
}

const initialState = {
  theme: theme,
};

const setTheme = (state, action) => {
  localStorage.setItem('theme', action.payload);
  state.theme = action.payload;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setTheme,
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
