import React from "react";
import Navbar from "./components/navbar";
import { useToggleDarkMode } from "./hooks/hooks";
import Pages from "./Pages";

function App() {
  const { darkMode, toggleDarkMode } = useToggleDarkMode();

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen px-10 md:px-20 bg-white dark:bg-gray-800">
        <Navbar onToggleTheme={toggleDarkMode} />
        <Pages />
      </div>
    </div>
  );
}

export default App;
