import React, { useContext } from "react";
import { ThemeContext } from "../services/themeContext";
import { TogglerButton } from "./buttons";

// 
const ThemeTogglerButton = () => {
    const { theme, updateTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        updateTheme(newTheme);
    }

    return <TogglerButton onClick={toggleTheme} />;
};

export { ThemeTogglerButton };