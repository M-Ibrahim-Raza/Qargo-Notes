// React imports
import { useEffect, useRef } from "react";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/authSlice";

//  Component imports
import SubmitButton from "../components/layout/SubmitButton";

// React Router imports
import { Link, useNavigate } from "react-router-dom";

/**
 * Signup Page Component
 * - Provides a signup form for new users
 * - Redirects to notes page if a user is already logged in
 */
const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);

  // Redirect to notes if already logged in
  useEffect(() => {
    if (currentUser) navigate("/notes");
  }, [currentUser, navigate]);

  /**
   * Handle form submission
   * - Dispatches signup action
   * - Clears input fields
   * - Redirects to login page after successful signup
   */
  const handleSignup = (e) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(signup(formData));

    // Clear inputs
    emailRef.current.value = "";
    passwordRef.current.value = "";

    // Navigate to login page after signup
    navigate("/login");
  };

  return (
    <div className="bg-[#3e2723] text-white rounded-2xl shadow-xl w-full max-w-md p-8 m-auto">
      {/* ==================== Heading ==================== */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Qargo Coffee Notes
      </h1>
      <h2 className="text-xl font-bold text-center text-[#d7ccc8] mb-8">
        Sign Up
      </h2>

      {/* ==================== Signup Form ==================== */}
      <form onSubmit={handleSignup} className="space-y-6">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            ref={emailRef}
            required
            className="w-full px-4 py-2 rounded-lg border border-[#6d4c41] text-white focus:outline-none focus:ring-2 focus:ring-[#8d6e63]"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            ref={passwordRef}
            required
            className="w-full px-4 py-2 rounded-lg border border-[#6d4c41] text-white focus:outline-none focus:ring-2 focus:ring-[#8d6e63]"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <SubmitButton text="Sign Up" />
      </form>

      {/* Login Link */}
      <p className="text-center text-sm text-[#d7ccc8] mt-6">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
