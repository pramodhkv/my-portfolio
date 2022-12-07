import React from "react";
import CardSection from "./components/CardSection";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/navbar";
import { useToggleDarkMode } from "./hooks/hooks";

function App() {
  const { darkMode, toggleDarkMode } = useToggleDarkMode();

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen px-10 md:px-20 bg-white dark:bg-gray-800">
        <Navbar onToggleTheme={toggleDarkMode} />
        <InfoSection />
        <CardSection />
      </div>
    </div>
  );
}

export default App;
