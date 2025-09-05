// React Router imports
import { Link, useNavigate } from "react-router-dom";

// Use state import
import { useState } from "react";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

// Import logo
import logo from "../../assets/logo.png";

/**
 * Navbar Component
 * - Displays site title and navigation links
 * - Shows Login/Signup links if no user is logged in
 * - Shows Logout button if a user is logged in
 */
const Navbar = () => {
  // Get current user from Redux store
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  /**
   * Handle user logout
   * - Dispatches logout action
   * - Redirects to login page
   */
  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false)
    navigate("/login");
  };

  return (
    <nav className="bg-[#3e2723] text-white px-6 py-2 shadow-md flex justify-between items-center">
      {/* Site logo + title */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Qargo Coffee Logo"
          className="h-14 w-14 object-contain rounded-full"
        />
        <h1 className="text-xl font-bold">Qargo Coffee Notes</h1>
      </div>

      {/* Navigation links */}
      <div className="relative">
        {currentUser ? (
          // Dropdown Menu
          <div className="relative inline-block text-left">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center px-4 py-2 bg-[#5d4037] rounded-lg hover:bg-[#4e342e] transition"
            >
              {currentUser.email}
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-[#3e2723] hover:bg-[#efebe9] transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // Show Login and Sign Up links if no user is logged in
          <>
            <Link to="/signup" className="hover:underline px-4">
              Sign Up
            </Link>
            <Link to="/login" className="hover:underline px-4">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
