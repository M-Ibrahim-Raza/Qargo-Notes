// React Router import
import { Outlet } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";

// Global CSS
import "./index.css";

/**
 * App Layout Component
 * - Wraps the application with a navbar
 * - Provides a container for child routes via <Outlet />
 * - Applies global styling and layout
 */
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#d7ccc8] to-[#a1887f]">
      {/* Navbar Component */}
      <Navbar />

      {/* Main content area for child routes */}
      <main className="flex-1 flex p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
