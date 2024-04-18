import { configureStore } from "@reduxjs/toolkit";
import usersSlice, { addToUsers } from "./usersSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    theme: themeSlice,
  },
});
