// React imports
import { useState } from "react";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote } from "../store/notesSlice";

// Component Imports
import NoteCard from "../components/NoteCard";
import SubmitButton from "../components/layout/SubmitButton";

/**
 * Notes Page Component
 * - Displays a form to add new notes
 * - Shows a list of notes associated with the logged-in user
 */
const Notes = () => {
  const notes = useSelector((state) => state.notes.notes); // all notes from Redux store
  const currentUser = useSelector((state) => state.auth.currentUser); // logged-in user
  const dispatch = useDispatch();

  // Local state for form inputs
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  /**
   * Handle adding a new note
   * - Prevents empty submissions
   * - Associates note with current user
   * - Dispatches addNote action
   * - Clears form inputs
   */
  const handleAddNote = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
      userId: currentUser.id, // associate note with current user
    };

    dispatch(addNote(newNote));
    setTitle("");
    setContent("");
  };

  /**
   * Handle deleting a note
   * - Dispatches deleteNote action with note ID and current user ID
   */
  const handleDeleteNote = (id) => {
    dispatch(deleteNote({ noteId: id, userId: currentUser.id }));
  };

  // Filter notes to show only those belonging to the current user
  const userNotes = notes.filter((note) => note.userId === currentUser.id);

  return (
    <div className="flex flex-1 flex-col items-center">
      {/* ==================== Add Note Form ==================== */}
      <form
        onSubmit={handleAddNote}
        className="w-full max-w-md bg-[#3e2723] text-white p-6 rounded-2xl shadow-md mb-8"
      >
        <h2 className="text-xl font-bold mb-4 text-[#d7ccc8]">Add a Note</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-lg border border-[#6d4c41] text-white focus:outline-none focus:ring-2 focus:ring-[#8d6e63]"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-lg border border-[#6d4c41] text-white focus:outline-none focus:ring-2 focus:ring-[#8d6e63]"
          rows={4}
        />

        {/* Submit Button */}
        <SubmitButton text="Add" />
      </form>

      {/* ==================== Notes List ==================== */}
      <div className="w-2/3 px-4 flex flex-col gap-4">
        {userNotes.length === 0 && (
          <p className="text-center text-[#3e2723] w-full">
            No notes yet. Add your first note!
          </p>
        )}

        {userNotes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            content={note.content}
            onDelete={() => handleDeleteNote(note.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
