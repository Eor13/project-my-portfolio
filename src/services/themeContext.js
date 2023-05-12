import { createContext, useState } from "react";

  

const themes = {
    dark:{
        colorText: '#F2F2F2',
        colorBackgroung: '#0D0D0D',
        color: '#fff',
        background: '#000',
        fontPrincipal: 'Spline Sans Mono , monospace',
        fontSecondary:'Audiowide cursive',
        colorDetails: '#F2CF66',
        colorOfTheEnds: '#F25C05',
        colorTitles: '#F24405',
    },
    light:{
        
        colorText: '#0D0D0D',
        colorBackgroung: '#F2F2F2',
        fontPrincipal: 'Spline Sans Mono , monospace',
        fontSecondary:'Audiowide cursive',
        colorDetails: '#F2CF66',
        colorOfTheEnds: '#F25C05',
        colorTitles: '#F24405',
    }
};

const ThemeContext = createContext({});

const ThemeProvider = ( props ) => {
    const [theme, setTheme] = useState(themes.dark )
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export{ThemeContext, themes, ThemeProvider};