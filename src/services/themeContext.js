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
}

const ThemeContext = createContext({});

const ThemeeProvider = ({children}) => {
    // Buscar o tema do localStorage no momento do carregamento inicial
    const getItemsLocalStorage =() =>{
        const savedTheme = localStorage.getItem('theme')
        // Se tiver um tema no armazenamento local, retorna, senão retorne 'dark'
        return savedTheme ? savedTheme : 'light' 
    }
    
    // Estado para armazenar o tema
    const [theme, setTheme] = useState(getItemsLocalStorage())

    // Função para atualizar o tema
    const upDateTheme = (newTheme) =>{
        setTheme(newTheme) 
    }
    
    useEffect(() =>{
        localStorage.setItem("theme",theme)
      },[theme])
   
    return(
        <ThemeContext.Provider value={{ theme, upDateTheme }}>
            <ThemeProvider theme = {themes[theme]} key={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export{ThemeContext , themes, ThemeeProvider};