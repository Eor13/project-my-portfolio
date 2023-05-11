import { useContext } from 'react';
import { ThemeContext } from '../services/themeContext';
import { AppRoutes } from './routes';

const Body = () =>{
    const {theme} = useContext(ThemeContext)
    console.log("app ", theme)
    return(
        <main  style={{background:theme.background}}>
            <AppRoutes/>
        </main>
    )
}

export {Body}