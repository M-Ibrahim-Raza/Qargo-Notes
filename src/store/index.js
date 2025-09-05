// Redux Toolkit import
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import notesReducer from "./notesSlice";
import authReducer from "./authSlice";

/**
 * Configure Redux store
 * - Combines multiple slices (notes, auth)
 * - Provides a centralized store for the app
 */
export const store = configureStore({
  reducer: {
    notes: notesReducer, // Notes slice
    auth: authReducer,   // Authentication slice
  },
});
