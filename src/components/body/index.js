import { useContext } from 'react';
import { ThemeContext } from '../../services/themeContext';
import {AppRoutes} from '../../pages/routes'

const Body = () =>{
    const {theme} = useContext(ThemeContext)
    return(
        <main  style={{background:theme.colorBackgroung}}>
            <AppRoutes/>
        </main>
    )
}

export {Body}