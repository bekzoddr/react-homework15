import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: JSON.parse(localStorage.getItem("themes")) || false,
  },
  reducers: {
    toggleMode(state, action) {
      state.value = !state.value;
      localStorage.setItem("themes", JSON.stringify(state.value));
    },
  },
});

export const { toggleMode } = themeSlice.actions;

export default themeSlice.reducer;
