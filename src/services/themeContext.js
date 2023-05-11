import { createContext, useState } from "react";


const themes = {
    dark:{
        fontPrincipal: 'Spline Sans Mono , monospace',
        fontSecondary:'Audiowide cursive',
        colorDetails: '#F2CF66',
        colorOfTheEnds: '#F25C05',
        colorTitles: '#F24405',
        colorText: '#F2F2F2',
        colorBackgroung: '#0D0D0D',
        color: '#fff',
        background: '#000'
    },
    light:{
        fontPrincipal: 'Spline Sans Mono , monospace',
        fontSecondary:'Audiowide cursive',
        colorDetails: '#F2CF66',
        colorOfTheEnds: '#F25C05',
        colorTitles: '#F24405',
        colorText: '#0D0D0D',
        colorBackgroung: '#F2F2F2',
        color: '#000',
        background: '#fff'
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