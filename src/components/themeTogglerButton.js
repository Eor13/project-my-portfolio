import React, { useContext } from "react";
import { ThemeContext, themes } from "../services/themeContext";
import { TogglerButton } from "./buttons";


const ThemeTogglerButton =() =>{
    const { theme, upDateTheme } = useContext( ThemeContext )
    return <TogglerButton onClick={() => upDateTheme(theme === themes.dark ? themes.light : themes.dark)}/>
};

export {ThemeTogglerButton};