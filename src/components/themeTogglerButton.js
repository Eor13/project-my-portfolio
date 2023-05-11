import React, { useContext } from "react";
import { ThemeContext, themes } from "../services/themeContext";
import { TogglerButton } from "./buttons";


const ThemeTogglerButton =() =>{
    const { theme, setTheme } = useContext( ThemeContext )
    return <TogglerButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}/>
};

export {ThemeTogglerButton};