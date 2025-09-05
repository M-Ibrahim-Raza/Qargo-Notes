// React and ReactDOM imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// React Router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Redux imports
import { Provider } from "react-redux";
import { store } from "./store";

// Global CSS
import "./index.css";

// Page and layout components
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Notes from "./pages/Notes.jsx";

/**
 * Define application routes
 * - "/" uses App as a layout component (should contain <Outlet />)
 * - Nested routes include login, signup, and notes pages
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout wrapper
    children: [
      {
        path: "",
        element: <Login />, // Default landing page
      },
      {
        path: "/signup",
        element: <Signup />, // Signup page
      },
      {
        path: "/login",
        element: <Login />, // Login page
      },
      {
        path: "notes",
        element: <Notes />, // Notes page (protected route can be added later)
      },
    ],
  },
]);

/**
 * Mount the React application
 * - Wrap with Redux Provider for global state
 * - Wrap with StrictMode for highlighting potential issues
 * - Provide router to manage navigation
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
