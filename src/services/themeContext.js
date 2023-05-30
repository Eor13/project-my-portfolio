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

    //1- Aqui nessa função getItemsLocalStorage, você não ta retornando nada. Quando você usa essa função como um argumento hook do useState para pegar o estado inicial, ela não vai retornar um valor o que é um problma porque o estado do tema seria undefined.
    //2 - você estava salvando no localstorage um objeto muito grande e o localstorage é feito para salvar coisas pequenas. Então eu mudei para salvar apenas o nome do tema.
    const getItemsLocalStorage =() =>{
        const savedTheme = localStorage.getItem('theme');
        // Se tiver um tema no armazenamento local, retorna, senão retorne 'light'
        return savedTheme ? savedTheme : 'light';
    }
    
    // Estado para armazenar o tema
    const [theme, setTheme] = useState(getItemsLocalStorage());
    
    
    // Função para atualizar o tema
    const updateTheme = (newTheme) => {
        setTheme(newTheme);
    }
    
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
   
    return(
        <ThemeContext.Provider value={{theme, updateTheme }}>
            <ThemeProvider theme={themes[theme]} key={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export{ThemeContext , themes, ThemeeProvider};