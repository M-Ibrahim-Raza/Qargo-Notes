// React Icons import
import { FaTrash } from "react-icons/fa";

/**
 * NoteCard Component
 * - Displays a single note with title and content
 * - Includes a delete button with trash icon
 *
 * Props:
 * - title: string, the note's title
 * - content: string, the note's content
 * - onDelete: function, callback to handle note deletion
 */
const NoteCard = ({ title, content, onDelete }) => {
  return (
    <div className="bg-[#6d4c41] text-white rounded-xl shadow-md p-4 flex flex-col w-full">
      {/* Note Header: Title and Delete Button */}
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold">{title}</h3>
        <button
          onClick={onDelete}
          className="text-red-400 hover:text-red-600 transition"
        >
          <FaTrash />
        </button>
      </div>

      {/* Note Content */}
      <p className="mt-2 text-sm">{content}</p>
    </div>
  );
};

export default NoteCard;
