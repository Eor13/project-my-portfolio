import { createContext, useEffect, useState } from "react";
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
        // Buscar o tema do localStorage no momento do carregamento inicial
    const getItemsLocalStorage =() =>{
        let savedTheme = localStorage.getItem('theme')
        let tests = savedTheme ? JSON.parse(savedTheme) : []
        console.log(tests) 
        //JSON PArse transforma de String para JSON
    }
    
        // Estado para armazenar o tema
    const [theme, setTheme] = useState(getItemsLocalStorage())
    console.log(theme)
    
    
    // Função para atualizar o tema
    const upDateTheme = (newTheme) =>{
        localStorage.setItem('theme', JSON.stringify(newTheme)) //JSON PArse transforma de JSON para  String
        setTheme(newTheme)
        console.log(newTheme)   
    }
    // useEffect(() =>{
    //     localStorage.setItem("theme", JSON.stringify(theme))
    //   },[theme])
   
    return(
        <ThemeContext.Provider value={{theme, upDateTheme }}>
            {/* <ThemeProvider theme = {typeof theme === 'object' ? theme : themes.light}> */}
            <ThemeProvider theme = {theme === themes.dark ? themes.light : themes.dark}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export{ThemeContext , themes, ThemeeProvider};