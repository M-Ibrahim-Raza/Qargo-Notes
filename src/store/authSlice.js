// Redux Toolkit import
import { createSlice } from "@reduxjs/toolkit";

/**
 * Initialize authentication state from localStorage
 * - currentUser: currently logged-in user
 * - users: list of all registered users
 */
const storedUser = JSON.parse(localStorage.getItem("currentUser")) || null;
const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

const initialState = {
  currentUser: storedUser,
  users: storedUsers,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Signup action
     * - Adds a new user if the email is not already registered
     * - Updates localStorage
     */
    signup: (state, action) => {
      const emailExists = state.users.some(
        (user) => user.email === action.payload.email
      );

      if (emailExists) {
        alert("This email is already registered!");
        return; // Stop execution, do not add duplicate user
      }

      const newUser = {
        id: Date.now(),
        email: action.payload.email,
        password: action.payload.password,
      };

      state.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    /**
     * Login action
     * - Sets currentUser if email and password match
     * - Updates localStorage
     */
    login: (state, action) => {
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );

      if (user) {
        state.currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        alert("Invalid email or password");
      }
    },

    /**
     * Logout action
     * - Clears currentUser
     * - Removes from localStorage
     */
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
});

// Export actions and reducer
export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
