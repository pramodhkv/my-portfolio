import React, { useState } from "react";

export const useToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return { darkMode, toggleDarkMode };
}
