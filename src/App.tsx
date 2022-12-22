import React from "react";
import CardSection from "./components/CardSection";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/navbar";
import ProjectSection from "./components/ProjectSection";
import { useToggleDarkMode } from "./hooks/hooks";

function App() {
  const { darkMode, toggleDarkMode } = useToggleDarkMode();

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen px-10 md:px-20 bg-white dark:bg-gray-800">
        <Navbar onToggleTheme={toggleDarkMode} />
        <InfoSection />
        <CardSection
          title="Values"
          imagesSrcList={[
            {
              src: "/images/design.png",
              type: "image/png",
              description: "Design",
              subtitle: "Bring beautiful design prototypes to life",
            },
            {
              src: "/images/code.png",
              type: "image/png",
              description: "Code",
              subtitle: "Emphasis on writing clean code & reusable components",
            },
            {
              src: "/images/consulting.png",
              type: "image/png",
              description: "Collaborate",
              subtitle:
                "Collaborate with the team members to learn from each other",
            },
          ]}
        />
        <ProjectSection
          title="Projects"
          imagesSrcList={[
            {
              src: "/images/recipe.png",
              type: "image/png",
              description: "Recipe App",
            },
            {
              src: "/images/nft-challenge.png",
              type: "image/png",
              description: "Friendly NFT marketplace",
            },
            {
              src: "/images/whatsapp.png",
              type: "image/png",
              description: "WhatsApp Web clone",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
