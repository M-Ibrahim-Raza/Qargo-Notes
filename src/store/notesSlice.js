// Redux Toolkit import
import { createSlice } from "@reduxjs/toolkit";

/**
 * Initialize notes state from localStorage
 * - Each note must have a userId to associate it with a user
 */
const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

const initialState = {
  notes: storedNotes,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    /**
     * Add a new note
     * - Adds note to the beginning of the notes array
     * - Updates localStorage
     * - action.payload = { id, title, content, userId }
     */
    addNote: (state, action) => {
      state.notes.unshift(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },

    /**
     * Delete a note
     * - Removes note matching noteId and userId
     * - Updates localStorage
     * - action.payload = { noteId, userId }
     */
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(
        (note) =>
          !(note.id === action.payload.noteId && note.userId === action.payload.userId)
      );
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
});

// Export actions and reducer
export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
