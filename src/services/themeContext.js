import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const themes = {
    dark:{
        colorPrimary: '#F2F2F2',
        colorSecondary: '#0D0D0D',
        colorDetails: '#F2CF66',
        colorOfTheEnds: '#F25C05',
        colorTitles: '#F24405',
    },
    light:{
        
        colorPrimary: '#0D0D0D',
        colorSecondary: '#F2F2F2',
        colorDetails: '#F2CF66',
        colorOfTheEnds: '#F25C05',
        colorTitles: '#F24405',
    },
    font:{
        fontPrincipal: 'Spline Sans Mono , monospace',
        fontSecondary:'Audiowide, cursive',
    }
};

const ThemeContext = createContext({});

const ThemeeProvider = ({children}) => {
    const [theme, setTheme] = useState( themes.dark )
    
    console.log(theme)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            <ThemeProvider theme = {typeof theme === 'object' ? theme : themes.light}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export{ThemeContext , themes, ThemeeProvider};